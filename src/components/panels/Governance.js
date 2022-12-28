import ProposalCard from '../uiKit/ProposalCard';
import PercentageLine from '../uiKit/PercentageLine';

import '../../assets/styles/panels/governancePanel.css';
import React from 'react';
import { getProposalDateString } from "../helpers/getProposalDateString";


const Cards = () => {
    const proposals = [
        {
            "id": "72",
            "type": "CommunityPoolSpendProposal",
            "typeText": "Community Pool Spend",
            "title": "Bringing Liquid Staking and DeFi to the Cosmos Hub with Interchain Security",
            "description": "This community spend proposal will be used to fund smart contract applications that take advantage of liquid staking. This proposal is requesting 150 000 ATOMs from the Cosmos Hub community pool to fund smart contract applications that are looking to leverage Interchain Security and the liquid staking feature, and to fund P2P’s mission to launch a DeFi Hub consumer chain, set to host the Lido liquid staking protocol.\n\n. Full Proposal: https://ipfs.io/ipfs/QmNeorW8npMEeo4BmJTwmqCMRsjbMJDZDfoMQvh3f1Yeop",
            "status": "PROPOSAL_STATUS_VOTING_PERIOD",
            "statusText": "Voting period",
            "category": "Inflation",
            "votes": [
                {
                    "option": "Yes",
                    "votes": "70897474344955",
                    "percent": "78.861231233",
                    "color": "#00B933"
                },
                {
                    "option": "NoWithVeto",
                    "votes": "8366722539764",
                    "percent": "9.31",
                    "color": "#6354B4"
                },
                {
                    "option": "Abstain",
                    "votes": "5876212210186",
                    "percent": "6.54",
                    "color": "#E2E2E2"
                },
                {
                    "option": "No",
                    "votes": "4763148682454",
                    "percent": "5.30",
                    "color": "#CC3030"
                }
            ],
            "content": {
                "@type": "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
                "title": "Bringing Liquid Staking and DeFi to the Cosmos Hub with Interchain Security",
                "description": "This community spend proposal will be used to fund smart contract applications that take advantage of liquid staking. This proposal is requesting 150 000 ATOMs from the Cosmos Hub community pool to fund smart contract applications that are looking to leverage Interchain Security and the liquid staking feature, and to fund P2P’s mission to launch a DeFi Hub consumer chain, set to host the Lido liquid staking protocol.\n\n. Full Proposal: https://ipfs.io/ipfs/QmNeorW8npMEeo4BmJTwmqCMRsjbMJDZDfoMQvh3f1Yeop",
                "recipient": "cosmos1czryt9wefedpqc43k2pnvqyl5txzhqdkxxdfcz",
                "amount": [
                    {
                        "denom": "uatom",
                        "amount": "150000000000"
                    }
                ]
            },
            "depositEnd": "2022-07-07T05:01:43.081233950Z",
            "votingStart": "2022-06-26T23:26:05.044259911Z",
            "votingEnd": "2022-07-10T23:26:05.044259911Z",
            "totalDeposit": 64.010201,
            "network": 'cosmos',
            "userVote":
                {
                    "vote": "Yes",
                    "color": "purple"
                },
        },
        {
            "id": "71",
            "type": "ClientUpdateProposal",
            "typeText": "Client Update",
            "title": "Recover EVMOS channel by upgrading to new client",
            "description": "Update the evmos client from the evmos_9001-1 to evmos_9001-2",
            "status": "PROPOSAL_STATUS_PASSED",
            "statusText": "Passed",
            "category": "General",
            "votes": [
                {
                    "option": "Yes",
                    "votes": "78818533867994",
                    "percent": "96.45",
                    "color": "#00B933"
                },
                {
                    "option": "No",
                    "votes": "2199768251914",
                    "percent": "2.69",
                    "color": "#CC3030"
                },
                {
                    "option": "Abstain",
                    "votes": "697055720742",
                    "percent": "0.85",
                    "color": "#E2E2E2"
                },
                {
                    "option": "NoWithVeto",
                    "votes": "3868202625",
                    "percent": "0.00",
                    "color": "#6354B4"
                }
            ],
            "content": {
                "@type": "/ibc.core.client.v1.ClientUpdateProposal",
                "title": "Recover EVMOS channel by upgrading to new client",
                "description": "Update the evmos client from the evmos_9001-1 to evmos_9001-2",
                "subject_client_id": "07-tendermint-620",
                "substitute_client_id": "07-tendermint-758"
            },
            "depositEnd": "2022-06-03T22:37:27.328556601Z",
            "votingStart": "2022-05-21T07:37:45.642335775Z",
            "votingEnd": "2022-06-04T07:37:45.642335775Z",
            "totalDeposit": 68.69,
            "network": 'juno',
        },
        {
            "id": "70",
            "type": "ClientUpdateProposal",
            "typeText": "Client Update",
            "title": "Recover EVMOS channel by upgrading to new client",
            "description": "Update the evmos client from the evmos_9001-1 to evmos_9001-2",
            "status": "PROPOSAL_STATUS_DEPOSIT_PERIOD",
            "statusText": "Deposit period",
            "userVote": null,
            "category": "Rewards coefficients",
            "votes": [
                {option: 'Yes', votes: '0', percent: 'NaN', color: '#00B933'},
                {option: 'Abstain', votes: '0', percent: 'NaN', color: '#A8C3E1'},
                {option: 'No', votes: '0', percent: 'NaN', color: '#CC3030'},
                {option: 'NoWithVeto', votes: '0', percent: 'NaN', color: '#6354B4'},
            ],
            "content": {
                "@type": "/ibc.core.client.v1.ClientUpdateProposal",
                "title": "Recover EVMOS channel by upgrading to new client",
                "description": "Update the evmos client from the evmos_9001-1 to evmos_9001-2",
                "subject_client_id": "07-tendermint-620",
                "substitute_client_id": "07-tendermint-743"
            },
            "depositEnd": "2022-05-13T02:15:33.126965686Z",
            "votingStart": "2022-04-29T04:24:04.809007039Z",
            "votingEnd": "2022-05-13T04:24:04.809007039Z",
            "totalDeposit": 65.0001,
            "network": 'osmosis',
        },
    ];

    return (
        <div className="governance-panel">
            <div className="governance-panel__proposals">
                <h3>Proposals</h3>

                {proposals.map(proposal =>
                    <ProposalCard
                        key={proposal.id}
                        network={proposal.network}
                        id={proposal.id}
                        title={proposal.title}
                        status={proposal.status}
                        date={getProposalDateString(proposal)}
                        category={proposal.category}
                        votes={proposal.votes}
                        userVote={proposal.userVote}
                    />,
                )}

                <br/>
                <h3>Percentage line</h3>
                <PercentageLine items={proposals[0].votes}></PercentageLine>
            </div>
        </div>
    );
};

export default Cards;