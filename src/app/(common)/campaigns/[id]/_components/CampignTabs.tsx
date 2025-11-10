"use client";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, CardContent, Tab } from "@mui/material";
import { useState } from "react";
import CampaignComment from "./CampaignComment";
import CampaignStory from "./CampaignStory";
import CampaignUpdate from "./CampaignUpdate";

type TTab = "story" | "update" | "comment";

const tabs = [
  { id: crypto.randomUUID(), label: "Story", value: "story" },
  { id: crypto.randomUUID(), label: "Updates", value: "update" },
  { id: crypto.randomUUID(), label: "Comments & Supports", value: "comment" },
];

const tabContent = [
  { id: crypto.randomUUID(), component: <CampaignStory />, value: "story" },
  { id: crypto.randomUUID(), component: <CampaignUpdate />, value: "update" },
  { id: crypto.randomUUID(), component: <CampaignComment />, value: "comment" },
];

export default function CampignTabs() {
  const [tab, setTab] = useState<TTab>("story");

  const handleChange = (_: React.SyntheticEvent, newValue: TTab) => {
    setTab(newValue);
  };

  return (
    <TabContext value={tab}>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <TabList onChange={handleChange}>
              {tabs.map((tab) => (
                <Tab label={tab.label} value={tab.value} />
              ))}
            </TabList>
          </Box>
        </CardContent>
      </Card>

      {tabContent.map((content) => (
        <TabPanel key={content.id} value={content.value} sx={{ p: 0 }}>
          {content.component}
        </TabPanel>
      ))}
    </TabContext>
  );
}
