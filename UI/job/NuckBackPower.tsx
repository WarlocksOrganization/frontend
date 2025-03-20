import styled from "styled-components";

interface NuckBackPowerProps {
   point: number
}

const NuckBackPower = ({point}: NuckBackPowerProps) => {
    let power = "⭐".repeat(point);
    power += "☆".repeat(4-point)

    return (
        <PowerMeterContainer>
            넉백&nbsp; {power}
        </PowerMeterContainer>
    )
}

const PowerMeterContainer = styled.div`
    background-color: orange;
    
    border-radius: 7px; 
    padding: 0.5em;
    margin: 0.5em;
`
export default NuckBackPower;