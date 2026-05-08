# `teamSyncGroupMapping` Submodule <a name="`teamSyncGroupMapping` Submodule" id="@cdktn/provider-github.teamSyncGroupMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamSyncGroupMapping <a name="TeamSyncGroupMapping" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_sync_group_mapping github_team_sync_group_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new TeamSyncGroupMapping(Construct Scope, string Id, TeamSyncGroupMappingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig">TeamSyncGroupMappingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig">TeamSyncGroupMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.putGroup">PutGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGroup` <a name="PutGroup" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.putGroup"></a>

```csharp
private void PutGroup(IResolvable|TeamSyncGroupMappingGroup[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.putGroup.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>[]

---

##### `ResetGroup` <a name="ResetGroup" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TeamSyncGroupMapping resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

TeamSyncGroupMapping.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

TeamSyncGroupMapping.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

TeamSyncGroupMapping.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

TeamSyncGroupMapping.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TeamSyncGroupMapping resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TeamSyncGroupMapping to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TeamSyncGroupMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_sync_group_mapping#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TeamSyncGroupMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.group">Group</a></code> | <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList">TeamSyncGroupMappingGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.groupInput">GroupInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlugInput">TeamSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlug">TeamSlug</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.group"></a>

```csharp
public TeamSyncGroupMappingGroupList Group { get; }
```

- *Type:* <a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList">TeamSyncGroupMappingGroupList</a>

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.groupInput"></a>

```csharp
public IResolvable|TeamSyncGroupMappingGroup[] GroupInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TeamSlugInput`<sup>Optional</sup> <a name="TeamSlugInput" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlugInput"></a>

```csharp
public string TeamSlugInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TeamSlug`<sup>Required</sup> <a name="TeamSlug" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlug"></a>

```csharp
public string TeamSlug { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamSyncGroupMappingConfig <a name="TeamSyncGroupMappingConfig" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new TeamSyncGroupMappingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string TeamSlug,
    IResolvable|TeamSyncGroupMappingGroup[] Group = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.teamSlug">TeamSlug</a></code> | <code>string</code> | Slug of the team. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.group">Group</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>[]</code> | group block. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_sync_group_mapping#id TeamSyncGroupMapping#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TeamSlug`<sup>Required</sup> <a name="TeamSlug" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.teamSlug"></a>

```csharp
public string TeamSlug { get; set; }
```

- *Type:* string

Slug of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_sync_group_mapping#team_slug TeamSyncGroupMapping#team_slug}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.group"></a>

```csharp
public IResolvable|TeamSyncGroupMappingGroup[] Group { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>[]

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_sync_group_mapping#group TeamSyncGroupMapping#group}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_sync_group_mapping#id TeamSyncGroupMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TeamSyncGroupMappingGroup <a name="TeamSyncGroupMappingGroup" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new TeamSyncGroupMappingGroup {
    string GroupDescription,
    string GroupId,
    string GroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupDescription">GroupDescription</a></code> | <code>string</code> | The description of the IdP group. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupId">GroupId</a></code> | <code>string</code> | The ID of the IdP group. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupName">GroupName</a></code> | <code>string</code> | The name of the IdP group. |

---

##### `GroupDescription`<sup>Required</sup> <a name="GroupDescription" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupDescription"></a>

```csharp
public string GroupDescription { get; set; }
```

- *Type:* string

The description of the IdP group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_sync_group_mapping#group_description TeamSyncGroupMapping#group_description}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

The ID of the IdP group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_sync_group_mapping#group_id TeamSyncGroupMapping#group_id}

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

The name of the IdP group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/team_sync_group_mapping#group_name TeamSyncGroupMapping#group_name}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamSyncGroupMappingGroupList <a name="TeamSyncGroupMappingGroupList" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new TeamSyncGroupMappingGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.get"></a>

```csharp
private TeamSyncGroupMappingGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.internalValue"></a>

```csharp
public IResolvable|TeamSyncGroupMappingGroup[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>[]

---


### TeamSyncGroupMappingGroupOutputReference <a name="TeamSyncGroupMappingGroupOutputReference" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new TeamSyncGroupMappingGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescriptionInput">GroupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescription">GroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupDescriptionInput`<sup>Optional</sup> <a name="GroupDescriptionInput" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescriptionInput"></a>

```csharp
public string GroupDescriptionInput { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `GroupDescription`<sup>Required</sup> <a name="GroupDescription" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescription"></a>

```csharp
public string GroupDescription { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TeamSyncGroupMappingGroup InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>

---



