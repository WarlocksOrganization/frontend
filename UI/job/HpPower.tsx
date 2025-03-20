import styled from "styled-components";

interface HpPowerProps {
    point: number,
}

const HpPower = ({point}:HpPowerProps) => {
    let power = "⭐".repeat(point);
    power += "☆".repeat(4-point)

    return (
        <PowerMeterContainer>
            체력&nbsp; {power}
        </PowerMeterContainer>
    )
}

const PowerMeterContainer = styled.div`
    background-color: ${(props) => props.color || "red"};

    border-radius: 7px;
    padding: 0.5em;
    margin: 0.5em;
`
export default HpPower;