import React from 'react';
import PropTypes from 'prop-types'

import CoinIcon from './CoinIcon';
import PercentageLine from '../uiKit/PercentageLine';

import '../../assets/styles/uiKit/proposalCard.css';

const PROPOSAL_STATUSES_TEXT = {
    PROPOSAL_STATUS_PASSED: 'Passed',
    PROPOSAL_STATUS_REJECTED: 'Rejected',
    PROPOSAL_STATUS_DEPOSIT_PERIOD: 'Deposit period',
    PROPOSAL_STATUS_VOTING_PERIOD: 'Voting period',
    PROPOSAL_STATUS_FAILED: 'Failed',
};

export const ProposalCard = ({
    id,
    network,
    status,
    title,
    votes,
    userVote,
    date,
    category,
    onClick = () => {},
}) => {
    const getStatus = () => status?.replaceAll('_', '-')?.toLowerCase();
    const isDepositPeriod = status === 'PROPOSAL_STATUS_DEPOSIT_PERIOD';
    const isVotingPeriod = status === 'PROPOSAL_STATUS_VOTING_PERIOD';

    const totalVotes = votes.reduce((acc, vote) => acc + vote.votes, 0);

    const winnerVoteOption = () => {
        let winnerVoteOption;

        votes.forEach((vote) => {
            if (Number(vote.votes) > (winnerVoteOption?.votes || 0)) {
                winnerVoteOption = vote;
            }
        });

        return winnerVoteOption;
    };

    return (
        <div
            className={`proposal-card proposal-card--${getStatus()}`}
            onClick={onClick}
        >
            <div className="proposal-card__row">
                <div className="proposal-card__info">
                    <span className="proposal-card__number">#{id}</span>
                    <span className={`proposal-card__status proposal-card__status--${getStatus()} `}>
                        {PROPOSAL_STATUSES_TEXT[status]}
                    </span>
                </div>
                {!!network &&
                    <div className="proposal-card__network">
                        <CoinIcon icon={network} width="20px" height="20px"/>
                        <div className="proposal-card__network-name">{network}</div>
                    </div>
                }
            </div>
            <div className="proposal-card__row">
                <div className="proposal-card__title">
                    {title}
                </div>
                {!isDepositPeriod && !!winnerVoteOption() &&
                    <div className="proposal-card__total">
                        {winnerVoteOption()?.option}:
                        <span className="proposal-card__total-percent" style={{ color: winnerVoteOption()?.color }}>
                            {Number.parseFloat(winnerVoteOption()?.percent).toFixed(2)}
                        </span>%
                    </div>
                }
            </div>
            {(!isDepositPeriod && (totalVotes > 0)) &&
                <div className="proposal-card__row">
                    <div className="proposal-card__line">
                        <PercentageLine items={votes}/>
                    </div>
                </div>
            }
            {!!category &&
                <div className="proposal-card__row">
                    <div className="proposal-card__category">Category:</div>
                    <div className="proposal-card__category-value">{category}</div>
                </div>
            }
            <div className="proposal-card__row">
                <div className="proposal-card__you-vote">You vote:</div>
                {userVote
                    ? <div
                        className="proposal-card__you-vote-value"
                        style={{ color: userVote?.color }}
                    >
                        {userVote?.vote}
                    </div>
                    : <span className="proposal-card__you-vote-value--not-voted">
                        {(isVotingPeriod || isDepositPeriod) ? `You haven't voted` : 'No voting data'}
                    </span>
                }

            </div>
            <div className="proposal-card__row">
                <div className="proposal-card__time">Time:</div>
                <div className="proposal-card__time-value">{date}</div>
            </div>
        </div>
    );
};

ProposalCard.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    network: PropTypes.string,
    category: PropTypes.string,
    status: PropTypes.oneOf(Object.keys(PROPOSAL_STATUSES_TEXT)).isRequired,
    title: PropTypes.string.isRequired,
    votes: PropTypes.array.isRequired,
    userVote: PropTypes.object,
    date: PropTypes.string.isRequired,
};

export default ProposalCard;