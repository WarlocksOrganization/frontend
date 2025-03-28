import React from "react";
import LandingPageV2 from "@/pages/LandingPageV2.";
import {useNotionStore} from "@/stores/notionStore";

export default function Home() {

  return (
    <div style={{width: "100%"}}>
      <title>Smash up!</title>
      <LandingPageV2/>
    </div>
  );
}
