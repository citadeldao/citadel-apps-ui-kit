import moment from "moment";

export const getProposalDateString = (proposal) => {
    return proposal.status === 'PROPOSAL_STATUS_VOTING_PERIOD'
        ? `${moment().to(proposal.votingEnd, true)} left`
        : moment(proposal.votingEnd).fromNow();
}
