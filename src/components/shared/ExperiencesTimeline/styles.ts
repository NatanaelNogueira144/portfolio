import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
`;

export const TimelineList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const TimelineItem = styled.li`
    display: flex;
    align-items: stretch;
    justify-content: center;
    position: relative;
`;

export const TimelineLeft = styled.div`
    flex: 1;
    max-width: 40%;
    margin-bottom: 30px;
`;

export const CompanyTitle = styled.h3`
    font-size: 1.25rem;
    margin-bottom: 8px;
    flex: 1;
    color: ${props => props.theme.colors.secondary};
`;

export const JobDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RoleTitle = styled.h4`
    font-size: 1.25rem;
    margin-bottom: 8px;
    color: ${props => props.theme.colors.secondary};
`;

export const RoleDescription = styled.p`
    font-size: 1rem;
    margin-bottom: 7px;
`;

export const TimelineRight = styled.div`
    flex: 1;
    max-width: 40%;
    margin-bottom: 30px;
`;

export const TimelineCenter = styled.div`
    position: relative;
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TimelineDot = styled.span`
    width: 20px;
    height: 20px;
    background: ${props => props.theme.colors.secondary};
    border-radius: 50%;
    margin-bottom: 5px;
    border: 2px solid #fff;
    box-shadow: 0 0 0 4px ${props => props.theme.colors.secondary};
`;

export const TimelineLine = styled.span`
    width: 4px;
    flex: 1;
    background: linear-gradient(to bottom, ${props => props.theme.colors.secondary} 60%, ${props => props.theme.colors.white} 100%);
    margin-bottom: 5px;
`;