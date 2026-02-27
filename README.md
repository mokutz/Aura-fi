# Aura-fi
Aura-Fi AFI is a next-generation "Flatcoin" built on the Solana blockchain. Engineered in the wake of the 2022 market collapses, AFI moves away from fragile algorithmic models toward a Hardened Treasury system. By utilizing Solana Token-2022 extensions, Aura-Fi bakes economic stability and Active Governance rewards directly into the protocol's DNA.
1. The 2/2 Anti-Fragile Flywheel
Aura-Fi implements a dual-tax structure to ensure protocol longevity and founder sustainability:

2% Mint/Buy Tax: Directed to a Squads v4 Multisig for permanent development funding.

2% Burn/Sell Tax: Directed to the Hardening Treasury. This tax buys JitoSOL, increasing the backing-per-token for every user who remains in the ecosystem.

2. Proof-of-Participation (PoP)
Unlike traditional DAOs plagued by voter apathy, AFI utilizes a Voter-Stake-Registry (VSR).

Passive Holders: 0% yield.

Active Voters: Receive the majority share of Treasury staking rewards and sell-tax revenue.

3. Hardened Backing
AFI is 1-to-1 backed by a basket of SOL and USDC. The protocol never "dumps" reserves to defend a peg; instead, it uses liquid staking yield to reward those who govern the protocol.

🛠️ Technical Implementation
This repository contains the core smart contract logic for the AFI stablecoin using the Anchor Framework.

Features Enabled:
Transfer Fee Extension: Hardcoded 2% protocol fee.

Metadata Pointer: On-chain links to the Aura-Fi Manifesto and branding.

Mint/Freeze Authority: Managed via decentralized governance (Realms).

📋 How to Interact (Devnet)
Clone the repo: git clone https://github.com/ Mokutz/Aura-Fi

Install dependencies: anchor build

Deploy: anchor deploy --provider.cluster devnet
