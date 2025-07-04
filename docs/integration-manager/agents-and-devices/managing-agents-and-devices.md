---
title: Managing Agents and Devices
---
# Managing Agents and Devices

The **Agents and Devices** page in Integration Manager provides a list of registered Agents and the ability to manage your Agents. 

To view and manage your registered Agents:

1. Select the **Agents** tab.
2. The **Agents and Devices** page is displayed:

   ![](/img/Registered-Agents.png)

The Registered Agents list includes the following columns:


| Status | Description |
| :--- | :--- |
| Hostname | Hostname of the agent owner. Clicking on the column header sorts the list of agents in ascending or descending alphabetical order. |
| Owner | Displays the first two characters of the agent owner name. Clicking on owner icon displays the username of the owner. |
| IPV4 | Public IP address of the agent (the owner’s local machine). |
| Last Check-in | Time the agent last sent a message back to the cloud. Clicking on the column header sorts the list of agents in ascending or descending alphabetical order. |
| Version |Version number of the installed agent. Clicking on the column header sorts the list of agents in ascending or descending alphabetical order. |
| Status | Displays the current status of the agent. Possible values are:<br /><br /><ul><li>**Healthy** - The agent is connected and ready to receive jobs.</li><li>**Updating** - The Agent is currently processing an Update Command, such as Update Worker or Update Engine.</li><li>**Warning*** - The Agent has not reported its status in over 3 hours and may require attention.</li><li>**Weekly** - Scheduled to run every week at a specified time on a specific day.</li><li>**Error*** - The Agent has not reported its status in over 6 hours.</li><li>**Offline*** - The Agent is offline or the local service is stopped. This status is typically reported just prior to a shutdown.</li></ul>*You can verify whether the agent is running, and also start the agent service, by opening Windows Services. |
| Active | Displays whether the agent is active or inactive. When inactive, remote jobs associated with the agent are paused. |
| <img src="/img/icons/ping-dropdown.png" className="icon" alt="the Ping dropdown"/> | Click **Ping** to ping the agent or click the dropdown arrow and select one of the following actions:<br /><br /><ul><li>**Request Log** - Requests an updated Agent log file and updates the `Agent.log file` in the `IntegrationAgent\logs` folder.</li><li>**View Log** - Displays the **Agent Log** page listing all log entries. You can filter the list by clicking <img src="/img/icons/filter.png" className="icon" alt="the Filter icon"/> and select/deselect **Informative Lines**, **Errors**, and/or **Others**, or click the search icon to display entries containing the search term.</li><li>**Update Settings** - Refreshes the API token and other various communication protocol settings used by the Agent, resets the connection configuration information in the current cloud settings, and updates the values for Status and Last Check-in time.</li><li>**Update License** - Updates to the newest agent license file you have installed locally.<br />**Note**: You cannot manually retrieve an Agent license file outside of Actian Data Platform.</li><li>**Update Engine** - Updates to the latest version of Actian Data Platform.</li><li>**Update Worker** - Updates to the latest version of the agent.</li><li>**Activate/Deactivate** - Deactivating an agent pauses remote jobs associated with the agent.</li><li>**Update Worker** - Updates to the latest version of the agent.</li><li>**Deregister** - Deletes the agent configuration, and removes it from the Agents and Devices page. Deregistering an agent permanently disables remote jobs associated with the agent. This action cannot be undone.<br />**Note**:  Deregistering an agent does not uninstall it from your local machine.</li></ul> |
