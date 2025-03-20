import styled from "styled-components";

interface MoveSpeedPower {
    point: number
}

const MoveSpeedPower = ({point}:MoveSpeedPower) => {
    let power = "⭐".repeat(point);
    power += "☆".repeat(4-point)

    return (
        <PowerMeterContainer>
            이동속도&nbsp; {power}
        </PowerMeterContainer>
    )
}

const PowerMeterContainer = styled.div`
    background-color: mediumpurple;
    
    border-radius: 7px;
    padding: 0.5em;
    margin: 0.5em;
`
export default MoveSpeedPower;