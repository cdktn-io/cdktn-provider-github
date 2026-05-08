# `organizationWebhook` Submodule <a name="`organizationWebhook` Submodule" id="@cdktn/provider-github.organizationWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationWebhook <a name="OrganizationWebhook" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook github_organization_webhook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer"></a>

```java
import io.cdktn.providers.github.organization_webhook.OrganizationWebhook;

OrganizationWebhook.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .events(java.util.List<java.lang.String>)
//  .active(java.lang.Boolean|IResolvable)
//  .configuration(OrganizationWebhookConfiguration)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.events">events</a></code> | <code>java.util.List<java.lang.String></code> | A list of events which should trigger the webhook. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicate if the webhook should receive events. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration">OrganizationWebhookConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook#id OrganizationWebhook#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.events"></a>

- *Type:* java.util.List<java.lang.String>

A list of events which should trigger the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook#events OrganizationWebhook#events}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicate if the webhook should receive events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook#active OrganizationWebhook#active}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration">OrganizationWebhookConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook#configuration OrganizationWebhook#configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook#id OrganizationWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.putConfiguration"></a>

```java
public void putConfiguration(OrganizationWebhookConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration">OrganizationWebhookConfiguration</a>

---

##### `resetActive` <a name="resetActive" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.resetActive"></a>

```java
public void resetActive()
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OrganizationWebhook resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.isConstruct"></a>

```java
import io.cdktn.providers.github.organization_webhook.OrganizationWebhook;

OrganizationWebhook.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.isTerraformElement"></a>

```java
import io.cdktn.providers.github.organization_webhook.OrganizationWebhook;

OrganizationWebhook.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.isTerraformResource"></a>

```java
import io.cdktn.providers.github.organization_webhook.OrganizationWebhook;

OrganizationWebhook.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.generateConfigForImport"></a>

```java
import io.cdktn.providers.github.organization_webhook.OrganizationWebhook;

OrganizationWebhook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OrganizationWebhook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OrganizationWebhook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OrganizationWebhook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OrganizationWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OrganizationWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference">OrganizationWebhookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.configurationInput">configurationInput</a></code> | <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration">OrganizationWebhookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.configuration"></a>

```java
public OrganizationWebhookConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference">OrganizationWebhookConfigurationOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.activeInput"></a>

```java
public java.lang.Boolean|IResolvable getActiveInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.configurationInput"></a>

```java
public OrganizationWebhookConfiguration getConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration">OrganizationWebhookConfiguration</a>

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhook.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationWebhookConfig <a name="OrganizationWebhookConfig" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.Initializer"></a>

```java
import io.cdktn.providers.github.organization_webhook.OrganizationWebhookConfig;

OrganizationWebhookConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .events(java.util.List<java.lang.String>)
//  .active(java.lang.Boolean|IResolvable)
//  .configuration(OrganizationWebhookConfiguration)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | A list of events which should trigger the webhook. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicate if the webhook should receive events. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration">OrganizationWebhookConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook#id OrganizationWebhook#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

A list of events which should trigger the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook#events OrganizationWebhook#events}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicate if the webhook should receive events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook#active OrganizationWebhook#active}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.configuration"></a>

```java
public OrganizationWebhookConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration">OrganizationWebhookConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook#configuration OrganizationWebhook#configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook#id OrganizationWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OrganizationWebhookConfiguration <a name="OrganizationWebhookConfiguration" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration.Initializer"></a>

```java
import io.cdktn.providers.github.organization_webhook.OrganizationWebhookConfiguration;

OrganizationWebhookConfiguration.builder()
    .url(java.lang.String)
//  .contentType(java.lang.String)
//  .insecureSsl(java.lang.Boolean|IResolvable)
//  .secret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration.property.url">url</a></code> | <code>java.lang.String</code> | The URL of the webhook. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration.property.contentType">contentType</a></code> | <code>java.lang.String</code> | The content type for the payload. Valid values are either 'form' or 'json'. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration.property.insecureSsl">insecureSsl</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Insecure SSL boolean toggle. Defaults to 'false'. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration.property.secret">secret</a></code> | <code>java.lang.String</code> | The shared secret for the webhook. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook#url OrganizationWebhook#url}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

The content type for the payload. Valid values are either 'form' or 'json'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook#content_type OrganizationWebhook#content_type}

---

##### `insecureSsl`<sup>Optional</sup> <a name="insecureSsl" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration.property.insecureSsl"></a>

```java
public java.lang.Boolean|IResolvable getInsecureSsl();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Insecure SSL boolean toggle. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook#insecure_ssl OrganizationWebhook#insecure_ssl}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

The shared secret for the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_webhook#secret OrganizationWebhook#secret}

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationWebhookConfigurationOutputReference <a name="OrganizationWebhookConfigurationOutputReference" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.github.organization_webhook.OrganizationWebhookConfigurationOutputReference;

new OrganizationWebhookConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.resetInsecureSsl">resetInsecureSsl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetInsecureSsl` <a name="resetInsecureSsl" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.resetInsecureSsl"></a>

```java
public void resetInsecureSsl()
```

##### `resetSecret` <a name="resetSecret" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.resetSecret"></a>

```java
public void resetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.insecureSslInput">insecureSslInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.insecureSsl">insecureSsl</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration">OrganizationWebhookConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `insecureSslInput`<sup>Optional</sup> <a name="insecureSslInput" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.insecureSslInput"></a>

```java
public java.lang.Boolean|IResolvable getInsecureSslInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `insecureSsl`<sup>Required</sup> <a name="insecureSsl" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.insecureSsl"></a>

```java
public java.lang.Boolean|IResolvable getInsecureSsl();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfigurationOutputReference.property.internalValue"></a>

```java
public OrganizationWebhookConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-github.organizationWebhook.OrganizationWebhookConfiguration">OrganizationWebhookConfiguration</a>

---



