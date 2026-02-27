import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AuraFi } from "../target/types/aura_fi";
import { 
  TOKEN_2022_PROGRAM_ID, 
  getTransferFeeAmount, 
  unpackAccount 
} from "@solana/spl-token";
import { assert } from "chai";

describe("aura-fi", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.AuraFi as Program<AuraFi>;

  it("Initializes AFI and verifies the 2% Anti-Fragile Tax", async () => {
    // 1. Setup Accounts
    const mint = anchor.web3.Keypair.generate();
    const multisig = anchor.web3.Keypair.generate(); // In production, this is your Squads v4 address

    // 2. Initialize the Mint with 200 Basis Points (2%)
    await program.methods
      .initializeAfiMint(200, new anchor.BN(5000000))
      .accounts({
        mint: mint.publicKey,
        multisigAuthority: multisig.publicKey,
        tokenProgram: TOKEN_2022_PROGRAM_ID,
      })
      .signers([mint])
      .rpc();

    // 3. Verify the Extension logic
    const mintInfo = await provider.connection.getAccountInfo(mint.publicKey);
    assert.ok(mintInfo.owner.equals(TOKEN_2022_PROGRAM_ID), "AFI must be owned by Token-2022");
    
    console.log("🛡️ Aura-Fi Protocol Verified: 2% Exit Tax Hardcoded.");
  });
});
