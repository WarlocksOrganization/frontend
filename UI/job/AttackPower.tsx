import styled from "styled-components";

interface AttackPowerProps {
    point: number;
}

const AttackPower = ({point}: AttackPowerProps) => {
    let power = "⭐".repeat(point);
    power += "☆".repeat(4-point)

    return (
        <PowerMeterContainer>
            공격력&nbsp; {power}
        </PowerMeterContainer>
    )
}

const PowerMeterContainer = styled.div`
    background-color: indianred;
    
    border-radius: 7px;
    padding: 0.5em;
    margin: 0.5em;
`
export default AttackPower;