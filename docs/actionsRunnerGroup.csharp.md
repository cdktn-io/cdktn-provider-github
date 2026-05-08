# `actionsRunnerGroup` Submodule <a name="`actionsRunnerGroup` Submodule" id="@cdktn/provider-github.actionsRunnerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsRunnerGroup <a name="ActionsRunnerGroup" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_runner_group github_actions_runner_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsRunnerGroup(Construct Scope, string Id, ActionsRunnerGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig">ActionsRunnerGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig">ActionsRunnerGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetAllowsPublicRepositories">ResetAllowsPublicRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetRestrictedToWorkflows">ResetRestrictedToWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedRepositoryIds">ResetSelectedRepositoryIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedWorkflows">ResetSelectedWorkflows</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowsPublicRepositories` <a name="ResetAllowsPublicRepositories" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetAllowsPublicRepositories"></a>

```csharp
private void ResetAllowsPublicRepositories()
```

##### `ResetRestrictedToWorkflows` <a name="ResetRestrictedToWorkflows" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetRestrictedToWorkflows"></a>

```csharp
private void ResetRestrictedToWorkflows()
```

##### `ResetSelectedRepositoryIds` <a name="ResetSelectedRepositoryIds" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedRepositoryIds"></a>

```csharp
private void ResetSelectedRepositoryIds()
```

##### `ResetSelectedWorkflows` <a name="ResetSelectedWorkflows" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedWorkflows"></a>

```csharp
private void ResetSelectedWorkflows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ActionsRunnerGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsRunnerGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsRunnerGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsRunnerGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsRunnerGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ActionsRunnerGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsRunnerGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsRunnerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_runner_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ActionsRunnerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.default">Default</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.inherited">Inherited</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.runnersUrl">RunnersUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoriesUrl">SelectedRepositoriesUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositoriesInput">AllowsPublicRepositoriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflowsInput">RestrictedToWorkflowsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIdsInput">SelectedRepositoryIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflowsInput">SelectedWorkflowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositories">AllowsPublicRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflows">RestrictedToWorkflows</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflows">SelectedWorkflows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Inherited`<sup>Required</sup> <a name="Inherited" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.inherited"></a>

```csharp
public IResolvable Inherited { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RunnersUrl`<sup>Required</sup> <a name="RunnersUrl" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.runnersUrl"></a>

```csharp
public string RunnersUrl { get; }
```

- *Type:* string

---

##### `SelectedRepositoriesUrl`<sup>Required</sup> <a name="SelectedRepositoriesUrl" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoriesUrl"></a>

```csharp
public string SelectedRepositoriesUrl { get; }
```

- *Type:* string

---

##### `AllowsPublicRepositoriesInput`<sup>Optional</sup> <a name="AllowsPublicRepositoriesInput" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositoriesInput"></a>

```csharp
public bool|IResolvable AllowsPublicRepositoriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RestrictedToWorkflowsInput`<sup>Optional</sup> <a name="RestrictedToWorkflowsInput" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflowsInput"></a>

```csharp
public bool|IResolvable RestrictedToWorkflowsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SelectedRepositoryIdsInput`<sup>Optional</sup> <a name="SelectedRepositoryIdsInput" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIdsInput"></a>

```csharp
public double[] SelectedRepositoryIdsInput { get; }
```

- *Type:* double[]

---

##### `SelectedWorkflowsInput`<sup>Optional</sup> <a name="SelectedWorkflowsInput" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflowsInput"></a>

```csharp
public string[] SelectedWorkflowsInput { get; }
```

- *Type:* string[]

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `AllowsPublicRepositories`<sup>Required</sup> <a name="AllowsPublicRepositories" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositories"></a>

```csharp
public bool|IResolvable AllowsPublicRepositories { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RestrictedToWorkflows`<sup>Required</sup> <a name="RestrictedToWorkflows" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflows"></a>

```csharp
public bool|IResolvable RestrictedToWorkflows { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; }
```

- *Type:* double[]

---

##### `SelectedWorkflows`<sup>Required</sup> <a name="SelectedWorkflows" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflows"></a>

```csharp
public string[] SelectedWorkflows { get; }
```

- *Type:* string[]

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsRunnerGroupConfig <a name="ActionsRunnerGroupConfig" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsRunnerGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Visibility,
    bool|IResolvable AllowsPublicRepositories = null,
    bool|IResolvable RestrictedToWorkflows = null,
    double[] SelectedRepositoryIds = null,
    string[] SelectedWorkflows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.name">Name</a></code> | <code>string</code> | Name of the runner group. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.visibility">Visibility</a></code> | <code>string</code> | The visibility of the runner group. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.allowsPublicRepositories">AllowsPublicRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether public repositories can be added to the runner group. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.restrictedToWorkflows">RestrictedToWorkflows</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | List of repository IDs that can access the runner group. |
| <code><a href="#@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedWorkflows">SelectedWorkflows</a></code> | <code>string[]</code> | List of workflows the runner group should be allowed to run. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_runner_group#name ActionsRunnerGroup#name}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

The visibility of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_runner_group#visibility ActionsRunnerGroup#visibility}

---

##### `AllowsPublicRepositories`<sup>Optional</sup> <a name="AllowsPublicRepositories" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.allowsPublicRepositories"></a>

```csharp
public bool|IResolvable AllowsPublicRepositories { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether public repositories can be added to the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_runner_group#allows_public_repositories ActionsRunnerGroup#allows_public_repositories}

---

##### `RestrictedToWorkflows`<sup>Optional</sup> <a name="RestrictedToWorkflows" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.restrictedToWorkflows"></a>

```csharp
public bool|IResolvable RestrictedToWorkflows { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array.

Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_runner_group#restricted_to_workflows ActionsRunnerGroup#restricted_to_workflows}

---

##### `SelectedRepositoryIds`<sup>Optional</sup> <a name="SelectedRepositoryIds" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; set; }
```

- *Type:* double[]

List of repository IDs that can access the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_runner_group#selected_repository_ids ActionsRunnerGroup#selected_repository_ids}

---

##### `SelectedWorkflows`<sup>Optional</sup> <a name="SelectedWorkflows" id="@cdktn/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedWorkflows"></a>

```csharp
public string[] SelectedWorkflows { get; set; }
```

- *Type:* string[]

List of workflows the runner group should be allowed to run.

This setting will be ignored unless restricted_to_workflows is set to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_runner_group#selected_workflows ActionsRunnerGroup#selected_workflows}

---



