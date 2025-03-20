import styled from "styled-components";
import AttackPower from "@/UI/job/AttackPower";
import HpPower from "@/UI/job/HpPower";
import MoveSpeedPower from "@/UI/job/MoveSpeedPower";
import NuckBackPower from "@/UI/job/NuckBackPower";

interface PowerMeterProps {
    attack: number,
    hp: number,
    moveSpeed: number,
    nuckBack: number;
}

const PowerMeter = ({
    attack,
    hp,
    moveSpeed,
    nuckBack
} : PowerMeterProps) => {

    return (
        <PowerMeterContainer>
            <AttackPower point={attack}/>
            <HpPower point={hp}/>
            <MoveSpeedPower point={moveSpeed}/>
            <NuckBackPower point={nuckBack}/>
        </PowerMeterContainer>
    )
}

const PowerMeterContainer = styled.div`
    color: white;
`
export default PowerMeter;