import { TabList, Tabs, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import styled from "styled-components";

import Tracker from "../tracker";
import Analytics from "../analytics";

function Dashboard(props){
    return (
        <Container>
            <Tabs align="center">
                <TabList>
                    <Tab>Tracker</Tab>
                    <Tab>Analytics</Tab>
                    <Tab>History</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Tracker />
                    </TabPanel>
                    <TabPanel>
                        <Analytics />
                    </TabPanel>
                    <TabPanel>
                        TR3
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
}

const Container = styled.div``;

export default Dashboard;