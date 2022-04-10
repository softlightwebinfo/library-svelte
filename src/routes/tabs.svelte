<script>
  import {Tab, TabList, TabPanel, Tabs} from "$lib/components/tabs";
</script>
<Tabs>
  <TabList>
    <Tab>one</Tab>
    <Tab>two</Tab>
    <Tab>three</Tab>
  </TabList>

  <TabPanel>
    <h2>First panel</h2>
  </TabPanel>

  <TabPanel>
    <h2>Second panel</h2>
  </TabPanel>

  <TabPanel>
    <h2>Third panel</h2>
  </TabPanel>
</Tabs>
<style lang="scss" global>
  @import "../lib/style.scss";
</style>
