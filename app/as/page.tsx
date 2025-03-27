"use client";

import ModelCanvas from "@/model/ModelCanvas";
import {WarriorModel} from "@/model/WarriorModel";
import {ArcherModel} from "@/model/ArcherModel";
import {MageModel} from "@/model/MageModel";
import {ClericModel} from "@/model/ClericModel";
import {FireBall} from "@/model/skill/mage/FireBall";

export default function Home() {
    return (
        <ModelCanvas>
            <FireBall/>
        </ModelCanvas>
    );
}
