---
title: JobConfig Listener Aliasing
---

# JobConfig Listener Aliasing

## Overview

For better integration with external apps, any JobConfig Listener can be aliased to create a custom URL for your clients to execute your integration.

An alias defines an alternative name for an existing Configuration to be executed from the HTTP Listener API service. An alias can only be mapped to one Configuration; however, a configuration can be mapped to multiple aliases.

Aliasing allows you to:

* Create custom/branded API endpoints for your internal and external integration consumers
* Make it easier for API consumers by providing a static endpoint name that does not change even when the configuration is changed on the back end
* Seamlessly upgrade/downgrade/exchange the backend integration without disruption to consumers
* Use various access control mechanisms for your custom API endpoint, including:
   * Basic User Authentication (username/password)
	* API Keys (defined separately for each Alias you create)
	* Public access (not recommended to service consumers outside of your internal network)

As an example, you can turn this:
```
POST /api/jobconfigs/79356/listener?messagename=msg1 HTTP/1.1 Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.
eyJzY29wZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJpZCI6MSwiYWNjb3VudCI6MSwic Content-Type: application/json

{
    "name": "value",
    "metric": 124
}
```

into this:

```
POST /api/listener/my-custom-job-url HTTP/1.1
Authorization: Basic sIlJPTEVfVVNFUiJdLCJpZCI6MSwiYWNjb3VudCI6MSwi
Content-Type: application/json

{
    "name": "value",
    "metric": 124
}
```

## API Details

* Maximum payload size is 750KB
* Maximum synchronous wait time is 30 seconds
* Content-Types allowed: application/json, application/xml, text/plain
  
### Synchronous
  * Text Message payload 200 OK response (response body is driven by your integration process using outmessagename)
  * Text Message payload 408 Timeout response:
    * Your integration process does not complete within 30 seconds
    * Result/output may be retrieved asynchronously after the job is complete

### Asynchronous
  * Text Message payload 202 Accepted response
  * Result/output may be retrieved asynchronously once the job is complete

## Step 1: Create an Alias

1. Click the profile dropdown in the upper right corner and select **Administration**.

   ![](/img/Administration.png)

2. Click **Listeners**, then click **Add Listener**:

   ![](/img/Create-Alias2.png)

3. In the **Alias name** field, enter a globally-unique, URL-safe name for your Alias. This is the endpoint your consumers will use:

   ![](/img/Create-Alias3.png)

4. Select the backend configuration to run when your Alias is invoked. You can change it as needed:

   ![](/img/Create-Alias4.png)

5. Click **Continue**.

6. Either select an existing IP Address, or enter a new IP Address and Label, click **Add**, then click **Save**:

   ![](/img/Create-Alias6.png)

7. The Alias is displayed in **Integration Listeners** list:

   ![](/img/Create-Alias8.png)

## Step 2: Secure the Alias

The Access Key and Secret Key are used for programmatic (API) access to your listener. You can either fill in your own keys or generate them using the **Generate** button.

1. Select the listener from the  **Integration Listeners** list.
2. Either enter your own **Access Key** and **Secret Key**, or click <img src="/img/icons/generate.png" className="icon" alt="the Generate icon"/> to generate an API Key for your Alias:

   ![](/img/Create-Alias9.png)

3. The following dialog is displayed. Click **Generate Keys**:

   ![](/img/Create-Alias10.png)

4. The listener is updated with the generated keys.

   ![](/img/Create-Alias11.png)

	:::note
	You can re-generate or delete this key at any time to revoke consumer access
	:::

## Step 3: Invoke the Alias

You can invoke an Alias, that is, run a JobConfig, through the Job Execution API in several ways with several options. Note that your Alias only exposes the ability to execute a JobConfig with parameters. No user or configuration data is accessible through the Listener API.

:::danger[Warning]
Using HTTPS is always recommended. Otherwise, API tokens, credentials, and payloads are subject to hijack. HTTPS is always enabled and enforced for DataCloud and VPC deployments.
:::

If the job config alias is secured (i.e., not public), then the following conditions must be met to execute the alias:

* If ONLY api-key is set, then it must be supplied via the `x-api-key` header
* If BOTH api-key and api-secret are set, then Authorization: Basic is required, using the format of Base64Encode(api-key:api-secret)
* (Discouraged) Public Aliases do not require any authentication

#### Authorization: Bearer (access_token)
  * Bearer tokens can be retrieved from /api/login. (You must set an API password for your user to call /api/login).
  * Bearer tokens can be retrieved using Actian ID or OAuth authorization_code flow.
  * With a valid DataCloud JWT token with "execute" permission or Account Administrator.

#### Authorization: Basic (encoded API keys)
  * You must create API keys for this alias.
  * Credentials are constructed by first combining the Access Key and Secret Key with a colon (TESTACCESSKEY:TESTSECRETKEY), and then by encoding the resulting string in base64 (VEVTVEFDQ0VTU0tFWTpURVNUU0VDUkVUS0VZ).
  * Example - Authorization: Basic VEVTVEFDQ0VTU0tFWTpURVNUU0VDUkVUS0VZ

For more details, refer to [Open API spec: Run a job via jobConfig alias with text message input](https://console.im.actiandatacloud.com/apidocs/?urls.primaryName=Job%20Execution#/Job/runAliasWithMessage).

## Deleting a Listener

To delete a listener:

1. Click the profile dropdown in the upper right corner and select **Administration**.

   ![](/img/Administration.png)

2. Click **Listeners**:

3. Click the listener you want to delete:

   ![](/img/Select-Listener.png)

4. Click **Delete Listener**:

   ![](/img/Delete-Listener.png)

5. The **Delete Listener?** dialog appears, warning you that this action cannot be undone. To proceed with deleting the listener, click **Delete Listener**:

   ![](/img/Delete-Listener-Warning.png)
