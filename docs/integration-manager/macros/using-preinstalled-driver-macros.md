---
title: Using Pre-Installed Driver Macros
---

# Using Pre-Installed Driver Macros

Integration Manager provides pre-installed JDBC drivers from different vendors. You can use those drivers by specifying the supported macros listed below for each driver type.

## Supported Driver Macros

JDBC Driver | Macro | Value | Description |
--- | --- |--- |--- |
Actian | $(JDBC_DRIVER_JAR_ACTIAN) |  | Actian JDBC driver jar file |
Actian | $(JDBC_DRIVER_CLASS_ACTIAN) | `com.ingres.jdbc.IngresDriver` | Actian JDBC driver classname |
Ingres | $(JDBC_DRIVER_JAR_INGRES) |  | Actian JDBC driver jar file |
Ingres | $(JDBC_DRIVER_CLASS_INGRES) | `com.ingres.jdbc.IngresDriver` | Actian JDBC driver classname |
MySQL | $(JDBC_DRIVER_JAR_MYSQL) |  | MySQL JDBC driver jar file |
MySQL | $(JDBC_DRIVER_CLASS_MYSQL) | `com.mysql.cj.jdbc.Driver` | MySQL JDBC driver classname |
PostGres | $(JDBC_DRIVER_JAR_POSTGRES) |  | Postgres JDBC driver jar file |
PostGres | $(JDBC_DRIVER_CLASS_POSTGRES) | `com.postgres.Driver` | Postgres JDBC driver classname |
Redshift | $(JDBC_DRIVER_JAR_REDSHIFT) |  | Redshift JDBC driver jar file |
Redshift | $(JDBC_DRIVER_CLASS_REDSHIFT) | `com.amazon.redshift.Driver` | Redshift JDBC driver classname |
Snowflake | $(JDBC_DRIVER_JAR_SNOWFLAKE) |  | Snowflake JDBC driver jar file |
Snowflake | $(JDBC_DRIVER_CLASS_SNOWFLAKE) | `net.snowflake.client.jdbc.SnowflakeDriver` | Snowflake JDBC driver classname |


## Configuring Your Own JDBC Macros

If you have already configured the JDBC drivers with different macro names, you can replace the values in your cloud deployment(s) with the above macros. Refer to the following examples:

```
YOUR_DRIVER_JAR_NAME=$(JDBC_DRIVER_JAR_ACTIAN)

YOUR_DRIVER_CLASS_NAME=$(JDBC_DRIVER_CLASS_ACTIAN)
```

## Example for Redshift Configurations

![Sample-redshift-usage](/img/Redshift-Configuration.png)
