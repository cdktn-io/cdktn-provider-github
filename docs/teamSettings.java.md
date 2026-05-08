# `teamSettings` Submodule <a name="`teamSettings` Submodule" id="@cdktn/provider-github.teamSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamSettings <a name="TeamSettings" id="@cdktn/provider-github.teamSettings.TeamSettings"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings github_team_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer"></a>

```java
import io.cdktn.providers.github.team_settings.TeamSettings;

TeamSettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .teamId(java.lang.String)
//  .id(java.lang.String)
//  .notify(java.lang.Boolean|IResolvable)
//  .reviewRequestDelegation(TeamSettingsReviewRequestDelegation)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.teamId">teamId</a></code> | <code>java.lang.String</code> | The GitHub team id or the GitHub team slug. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#id TeamSettings#id}. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.notify">notify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to notify the entire team when at least one member is also assigned to the pull request. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.reviewRequestDelegation">reviewRequestDelegation</a></code> | <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a></code> | review_request_delegation block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.teamId"></a>

- *Type:* java.lang.String

The GitHub team id or the GitHub team slug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#team_id TeamSettings#team_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#id TeamSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notify`<sup>Optional</sup> <a name="notify" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.notify"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to notify the entire team when at least one member is also assigned to the pull request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#notify TeamSettings#notify}

---

##### `reviewRequestDelegation`<sup>Optional</sup> <a name="reviewRequestDelegation" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.reviewRequestDelegation"></a>

- *Type:* <a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

review_request_delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#review_request_delegation TeamSettings#review_request_delegation}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.putReviewRequestDelegation">putReviewRequestDelegation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.resetNotify">resetNotify</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.resetReviewRequestDelegation">resetReviewRequestDelegation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.teamSettings.TeamSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.teamSettings.TeamSettings.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.teamSettings.TeamSettings.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.teamSettings.TeamSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.teamSettings.TeamSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.teamSettings.TeamSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.teamSettings.TeamSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.teamSettings.TeamSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.teamSettings.TeamSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.teamSettings.TeamSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.teamSettings.TeamSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.teamSettings.TeamSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-github.teamSettings.TeamSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.teamSettings.TeamSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-github.teamSettings.TeamSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-github.teamSettings.TeamSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.teamSettings.TeamSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.teamSettings.TeamSettings.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-github.teamSettings.TeamSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.teamSettings.TeamSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-github.teamSettings.TeamSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.teamSettings.TeamSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.teamSettings.TeamSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-github.teamSettings.TeamSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.teamSettings.TeamSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReviewRequestDelegation` <a name="putReviewRequestDelegation" id="@cdktn/provider-github.teamSettings.TeamSettings.putReviewRequestDelegation"></a>

```java
public void putReviewRequestDelegation(TeamSettingsReviewRequestDelegation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.teamSettings.TeamSettings.putReviewRequestDelegation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-github.teamSettings.TeamSettings.resetId"></a>

```java
public void resetId()
```

##### `resetNotify` <a name="resetNotify" id="@cdktn/provider-github.teamSettings.TeamSettings.resetNotify"></a>

```java
public void resetNotify()
```

##### `resetReviewRequestDelegation` <a name="resetReviewRequestDelegation" id="@cdktn/provider-github.teamSettings.TeamSettings.resetReviewRequestDelegation"></a>

```java
public void resetReviewRequestDelegation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TeamSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.teamSettings.TeamSettings.isConstruct"></a>

```java
import io.cdktn.providers.github.team_settings.TeamSettings;

TeamSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.teamSettings.TeamSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.teamSettings.TeamSettings.isTerraformElement"></a>

```java
import io.cdktn.providers.github.team_settings.TeamSettings;

TeamSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.teamSettings.TeamSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-github.teamSettings.TeamSettings.isTerraformResource"></a>

```java
import io.cdktn.providers.github.team_settings.TeamSettings;

TeamSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.teamSettings.TeamSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.teamSettings.TeamSettings.generateConfigForImport"></a>

```java
import io.cdktn.providers.github.team_settings.TeamSettings;

TeamSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TeamSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TeamSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.teamSettings.TeamSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.teamSettings.TeamSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TeamSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.teamSettings.TeamSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TeamSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.teamSettings.TeamSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TeamSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegation">reviewRequestDelegation</a></code> | <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference">TeamSettingsReviewRequestDelegationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.teamSlug">teamSlug</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.teamUid">teamUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.notifyInput">notifyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegationInput">reviewRequestDelegationInput</a></code> | <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.notify">notify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.teamSettings.TeamSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.teamSettings.TeamSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.teamSettings.TeamSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.teamSettings.TeamSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.teamSettings.TeamSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.teamSettings.TeamSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.teamSettings.TeamSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.teamSettings.TeamSettings.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.teamSettings.TeamSettings.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.teamSettings.TeamSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.teamSettings.TeamSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.teamSettings.TeamSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.teamSettings.TeamSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.teamSettings.TeamSettings.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `reviewRequestDelegation`<sup>Required</sup> <a name="reviewRequestDelegation" id="@cdktn/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegation"></a>

```java
public TeamSettingsReviewRequestDelegationOutputReference getReviewRequestDelegation();
```

- *Type:* <a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference">TeamSettingsReviewRequestDelegationOutputReference</a>

---

##### `teamSlug`<sup>Required</sup> <a name="teamSlug" id="@cdktn/provider-github.teamSettings.TeamSettings.property.teamSlug"></a>

```java
public java.lang.String getTeamSlug();
```

- *Type:* java.lang.String

---

##### `teamUid`<sup>Required</sup> <a name="teamUid" id="@cdktn/provider-github.teamSettings.TeamSettings.property.teamUid"></a>

```java
public java.lang.String getTeamUid();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.teamSettings.TeamSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `notifyInput`<sup>Optional</sup> <a name="notifyInput" id="@cdktn/provider-github.teamSettings.TeamSettings.property.notifyInput"></a>

```java
public java.lang.Boolean|IResolvable getNotifyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `reviewRequestDelegationInput`<sup>Optional</sup> <a name="reviewRequestDelegationInput" id="@cdktn/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegationInput"></a>

```java
public TeamSettingsReviewRequestDelegation getReviewRequestDelegationInput();
```

- *Type:* <a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktn/provider-github.teamSettings.TeamSettings.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.teamSettings.TeamSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktn/provider-github.teamSettings.TeamSettings.property.notify"></a>

```java
public java.lang.Boolean|IResolvable getNotify();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-github.teamSettings.TeamSettings.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.teamSettings.TeamSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TeamSettingsConfig <a name="TeamSettingsConfig" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.Initializer"></a>

```java
import io.cdktn.providers.github.team_settings.TeamSettingsConfig;

TeamSettingsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .teamId(java.lang.String)
//  .id(java.lang.String)
//  .notify(java.lang.Boolean|IResolvable)
//  .reviewRequestDelegation(TeamSettingsReviewRequestDelegation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.teamId">teamId</a></code> | <code>java.lang.String</code> | The GitHub team id or the GitHub team slug. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#id TeamSettings#id}. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.notify">notify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to notify the entire team when at least one member is also assigned to the pull request. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.reviewRequestDelegation">reviewRequestDelegation</a></code> | <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a></code> | review_request_delegation block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

The GitHub team id or the GitHub team slug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#team_id TeamSettings#team_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#id TeamSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notify`<sup>Optional</sup> <a name="notify" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.notify"></a>

```java
public java.lang.Boolean|IResolvable getNotify();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to notify the entire team when at least one member is also assigned to the pull request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#notify TeamSettings#notify}

---

##### `reviewRequestDelegation`<sup>Optional</sup> <a name="reviewRequestDelegation" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.reviewRequestDelegation"></a>

```java
public TeamSettingsReviewRequestDelegation getReviewRequestDelegation();
```

- *Type:* <a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

review_request_delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#review_request_delegation TeamSettings#review_request_delegation}

---

### TeamSettingsReviewRequestDelegation <a name="TeamSettingsReviewRequestDelegation" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.Initializer"></a>

```java
import io.cdktn.providers.github.team_settings.TeamSettingsReviewRequestDelegation;

TeamSettingsReviewRequestDelegation.builder()
//  .algorithm(java.lang.String)
//  .memberCount(java.lang.Number)
//  .notify(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | The algorithm to use when assigning pull requests to team members. Supported values are ROUND_ROBIN and LOAD_BALANCE. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.memberCount">memberCount</a></code> | <code>java.lang.Number</code> | The number of team members to assign to a pull request. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.notify">notify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | whether to notify the entire team when at least one member is also assigned to the pull request. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

The algorithm to use when assigning pull requests to team members. Supported values are ROUND_ROBIN and LOAD_BALANCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#algorithm TeamSettings#algorithm}

---

##### `memberCount`<sup>Optional</sup> <a name="memberCount" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.memberCount"></a>

```java
public java.lang.Number getMemberCount();
```

- *Type:* java.lang.Number

The number of team members to assign to a pull request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#member_count TeamSettings#member_count}

---

##### `notify`<sup>Optional</sup> <a name="notify" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.notify"></a>

```java
public java.lang.Boolean|IResolvable getNotify();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

whether to notify the entire team when at least one member is also assigned to the pull request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#notify TeamSettings#notify}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamSettingsReviewRequestDelegationOutputReference <a name="TeamSettingsReviewRequestDelegationOutputReference" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.github.team_settings.TeamSettingsReviewRequestDelegationOutputReference;

new TeamSettingsReviewRequestDelegationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetMemberCount">resetMemberCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetNotify">resetNotify</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetMemberCount` <a name="resetMemberCount" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetMemberCount"></a>

```java
public void resetMemberCount()
```

##### `resetNotify` <a name="resetNotify" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetNotify"></a>

```java
public void resetNotify()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCountInput">memberCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notifyInput">notifyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCount">memberCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notify">notify</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `memberCountInput`<sup>Optional</sup> <a name="memberCountInput" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCountInput"></a>

```java
public java.lang.Number getMemberCountInput();
```

- *Type:* java.lang.Number

---

##### `notifyInput`<sup>Optional</sup> <a name="notifyInput" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notifyInput"></a>

```java
public java.lang.Boolean|IResolvable getNotifyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `memberCount`<sup>Required</sup> <a name="memberCount" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCount"></a>

```java
public java.lang.Number getMemberCount();
```

- *Type:* java.lang.Number

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notify"></a>

```java
public java.lang.Boolean|IResolvable getNotify();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.internalValue"></a>

```java
public TeamSettingsReviewRequestDelegation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

---



