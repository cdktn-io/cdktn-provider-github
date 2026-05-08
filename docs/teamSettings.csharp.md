# `teamSettings` Submodule <a name="`teamSettings` Submodule" id="@cdktn/provider-github.teamSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamSettings <a name="TeamSettings" id="@cdktn/provider-github.teamSettings.TeamSettings"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings github_team_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new TeamSettings(Construct Scope, string Id, TeamSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig">TeamSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.teamSettings.TeamSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig">TeamSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.putReviewRequestDelegation">PutReviewRequestDelegation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.resetNotify">ResetNotify</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.resetReviewRequestDelegation">ResetReviewRequestDelegation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.teamSettings.TeamSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.teamSettings.TeamSettings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.teamSettings.TeamSettings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.teamSettings.TeamSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.teamSettings.TeamSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.teamSettings.TeamSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.teamSettings.TeamSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.teamSettings.TeamSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.teamSettings.TeamSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.teamSettings.TeamSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.teamSettings.TeamSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.teamSettings.TeamSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.teamSettings.TeamSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.teamSettings.TeamSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.teamSettings.TeamSettings.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.teamSettings.TeamSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.teamSettings.TeamSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.teamSettings.TeamSettings.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.teamSettings.TeamSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.teamSettings.TeamSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.teamSettings.TeamSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.teamSettings.TeamSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.teamSettings.TeamSettings.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.teamSettings.TeamSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.teamSettings.TeamSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReviewRequestDelegation` <a name="PutReviewRequestDelegation" id="@cdktn/provider-github.teamSettings.TeamSettings.putReviewRequestDelegation"></a>

```csharp
private void PutReviewRequestDelegation(TeamSettingsReviewRequestDelegation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.teamSettings.TeamSettings.putReviewRequestDelegation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.teamSettings.TeamSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotify` <a name="ResetNotify" id="@cdktn/provider-github.teamSettings.TeamSettings.resetNotify"></a>

```csharp
private void ResetNotify()
```

##### `ResetReviewRequestDelegation` <a name="ResetReviewRequestDelegation" id="@cdktn/provider-github.teamSettings.TeamSettings.resetReviewRequestDelegation"></a>

```csharp
private void ResetReviewRequestDelegation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TeamSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.teamSettings.TeamSettings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

TeamSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.teamSettings.TeamSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.teamSettings.TeamSettings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

TeamSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.teamSettings.TeamSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.teamSettings.TeamSettings.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

TeamSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.teamSettings.TeamSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.teamSettings.TeamSettings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

TeamSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TeamSettings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.teamSettings.TeamSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.teamSettings.TeamSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TeamSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.teamSettings.TeamSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TeamSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.teamSettings.TeamSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TeamSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegation">ReviewRequestDelegation</a></code> | <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference">TeamSettingsReviewRequestDelegationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.teamSlug">TeamSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.teamUid">TeamUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.notifyInput">NotifyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegationInput">ReviewRequestDelegationInput</a></code> | <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.notify">Notify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.teamSettings.TeamSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.teamSettings.TeamSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.teamSettings.TeamSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.teamSettings.TeamSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.teamSettings.TeamSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.teamSettings.TeamSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.teamSettings.TeamSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.teamSettings.TeamSettings.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.teamSettings.TeamSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.teamSettings.TeamSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.teamSettings.TeamSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.teamSettings.TeamSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.teamSettings.TeamSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.teamSettings.TeamSettings.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ReviewRequestDelegation`<sup>Required</sup> <a name="ReviewRequestDelegation" id="@cdktn/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegation"></a>

```csharp
public TeamSettingsReviewRequestDelegationOutputReference ReviewRequestDelegation { get; }
```

- *Type:* <a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference">TeamSettingsReviewRequestDelegationOutputReference</a>

---

##### `TeamSlug`<sup>Required</sup> <a name="TeamSlug" id="@cdktn/provider-github.teamSettings.TeamSettings.property.teamSlug"></a>

```csharp
public string TeamSlug { get; }
```

- *Type:* string

---

##### `TeamUid`<sup>Required</sup> <a name="TeamUid" id="@cdktn/provider-github.teamSettings.TeamSettings.property.teamUid"></a>

```csharp
public string TeamUid { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.teamSettings.TeamSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NotifyInput`<sup>Optional</sup> <a name="NotifyInput" id="@cdktn/provider-github.teamSettings.TeamSettings.property.notifyInput"></a>

```csharp
public bool|IResolvable NotifyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReviewRequestDelegationInput`<sup>Optional</sup> <a name="ReviewRequestDelegationInput" id="@cdktn/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegationInput"></a>

```csharp
public TeamSettingsReviewRequestDelegation ReviewRequestDelegationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktn/provider-github.teamSettings.TeamSettings.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.teamSettings.TeamSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Notify`<sup>Required</sup> <a name="Notify" id="@cdktn/provider-github.teamSettings.TeamSettings.property.notify"></a>

```csharp
public bool|IResolvable Notify { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-github.teamSettings.TeamSettings.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.teamSettings.TeamSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamSettingsConfig <a name="TeamSettingsConfig" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new TeamSettingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string TeamId,
    string Id = null,
    bool|IResolvable Notify = null,
    TeamSettingsReviewRequestDelegation ReviewRequestDelegation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.teamId">TeamId</a></code> | <code>string</code> | The GitHub team id or the GitHub team slug. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#id TeamSettings#id}. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.notify">Notify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to notify the entire team when at least one member is also assigned to the pull request. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.reviewRequestDelegation">ReviewRequestDelegation</a></code> | <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a></code> | review_request_delegation block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

The GitHub team id or the GitHub team slug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#team_id TeamSettings#team_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#id TeamSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Notify`<sup>Optional</sup> <a name="Notify" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.notify"></a>

```csharp
public bool|IResolvable Notify { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to notify the entire team when at least one member is also assigned to the pull request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#notify TeamSettings#notify}

---

##### `ReviewRequestDelegation`<sup>Optional</sup> <a name="ReviewRequestDelegation" id="@cdktn/provider-github.teamSettings.TeamSettingsConfig.property.reviewRequestDelegation"></a>

```csharp
public TeamSettingsReviewRequestDelegation ReviewRequestDelegation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

review_request_delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#review_request_delegation TeamSettings#review_request_delegation}

---

### TeamSettingsReviewRequestDelegation <a name="TeamSettingsReviewRequestDelegation" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new TeamSettingsReviewRequestDelegation {
    string Algorithm = null,
    double MemberCount = null,
    bool|IResolvable Notify = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.algorithm">Algorithm</a></code> | <code>string</code> | The algorithm to use when assigning pull requests to team members. Supported values are ROUND_ROBIN and LOAD_BALANCE. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.memberCount">MemberCount</a></code> | <code>double</code> | The number of team members to assign to a pull request. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.notify">Notify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | whether to notify the entire team when at least one member is also assigned to the pull request. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

The algorithm to use when assigning pull requests to team members. Supported values are ROUND_ROBIN and LOAD_BALANCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#algorithm TeamSettings#algorithm}

---

##### `MemberCount`<sup>Optional</sup> <a name="MemberCount" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.memberCount"></a>

```csharp
public double MemberCount { get; set; }
```

- *Type:* double

The number of team members to assign to a pull request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#member_count TeamSettings#member_count}

---

##### `Notify`<sup>Optional</sup> <a name="Notify" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.notify"></a>

```csharp
public bool|IResolvable Notify { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

whether to notify the entire team when at least one member is also assigned to the pull request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_settings#notify TeamSettings#notify}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamSettingsReviewRequestDelegationOutputReference <a name="TeamSettingsReviewRequestDelegationOutputReference" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new TeamSettingsReviewRequestDelegationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetMemberCount">ResetMemberCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetNotify">ResetNotify</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetMemberCount` <a name="ResetMemberCount" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetMemberCount"></a>

```csharp
private void ResetMemberCount()
```

##### `ResetNotify` <a name="ResetNotify" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetNotify"></a>

```csharp
private void ResetNotify()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCountInput">MemberCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notifyInput">NotifyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCount">MemberCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notify">Notify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `MemberCountInput`<sup>Optional</sup> <a name="MemberCountInput" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCountInput"></a>

```csharp
public double MemberCountInput { get; }
```

- *Type:* double

---

##### `NotifyInput`<sup>Optional</sup> <a name="NotifyInput" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notifyInput"></a>

```csharp
public bool|IResolvable NotifyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `MemberCount`<sup>Required</sup> <a name="MemberCount" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCount"></a>

```csharp
public double MemberCount { get; }
```

- *Type:* double

---

##### `Notify`<sup>Required</sup> <a name="Notify" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notify"></a>

```csharp
public bool|IResolvable Notify { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.internalValue"></a>

```csharp
public TeamSettingsReviewRequestDelegation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

---



