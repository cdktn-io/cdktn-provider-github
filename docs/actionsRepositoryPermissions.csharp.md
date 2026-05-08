# `actionsRepositoryPermissions` Submodule <a name="`actionsRepositoryPermissions` Submodule" id="@cdktn/provider-github.actionsRepositoryPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsRepositoryPermissions <a name="ActionsRepositoryPermissions" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_permissions github_actions_repository_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsRepositoryPermissions(Construct Scope, string Id, ActionsRepositoryPermissionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig">ActionsRepositoryPermissionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig">ActionsRepositoryPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.putAllowedActionsConfig">PutAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetAllowedActions">ResetAllowedActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetAllowedActionsConfig">ResetAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetShaPinningRequired">ResetShaPinningRequired</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllowedActionsConfig` <a name="PutAllowedActionsConfig" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.putAllowedActionsConfig"></a>

```csharp
private void PutAllowedActionsConfig(ActionsRepositoryPermissionsAllowedActionsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.putAllowedActionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig">ActionsRepositoryPermissionsAllowedActionsConfig</a>

---

##### `ResetAllowedActions` <a name="ResetAllowedActions" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetAllowedActions"></a>

```csharp
private void ResetAllowedActions()
```

##### `ResetAllowedActionsConfig` <a name="ResetAllowedActionsConfig" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetAllowedActionsConfig"></a>

```csharp
private void ResetAllowedActionsConfig()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetShaPinningRequired` <a name="ResetShaPinningRequired" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetShaPinningRequired"></a>

```csharp
private void ResetShaPinningRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ActionsRepositoryPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsRepositoryPermissions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsRepositoryPermissions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsRepositoryPermissions.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsRepositoryPermissions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ActionsRepositoryPermissions resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsRepositoryPermissions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsRepositoryPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_permissions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ActionsRepositoryPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActionsConfig">AllowedActionsConfig</a></code> | <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference">ActionsRepositoryPermissionsAllowedActionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActionsConfigInput">AllowedActionsConfigInput</a></code> | <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig">ActionsRepositoryPermissionsAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActionsInput">AllowedActionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.shaPinningRequiredInput">ShaPinningRequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActions">AllowedActions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.shaPinningRequired">ShaPinningRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowedActionsConfig`<sup>Required</sup> <a name="AllowedActionsConfig" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActionsConfig"></a>

```csharp
public ActionsRepositoryPermissionsAllowedActionsConfigOutputReference AllowedActionsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference">ActionsRepositoryPermissionsAllowedActionsConfigOutputReference</a>

---

##### `AllowedActionsConfigInput`<sup>Optional</sup> <a name="AllowedActionsConfigInput" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActionsConfigInput"></a>

```csharp
public ActionsRepositoryPermissionsAllowedActionsConfig AllowedActionsConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig">ActionsRepositoryPermissionsAllowedActionsConfig</a>

---

##### `AllowedActionsInput`<sup>Optional</sup> <a name="AllowedActionsInput" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActionsInput"></a>

```csharp
public string AllowedActionsInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `ShaPinningRequiredInput`<sup>Optional</sup> <a name="ShaPinningRequiredInput" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.shaPinningRequiredInput"></a>

```csharp
public bool|IResolvable ShaPinningRequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowedActions`<sup>Required</sup> <a name="AllowedActions" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActions"></a>

```csharp
public string AllowedActions { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `ShaPinningRequired`<sup>Required</sup> <a name="ShaPinningRequired" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.shaPinningRequired"></a>

```csharp
public bool|IResolvable ShaPinningRequired { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsRepositoryPermissionsAllowedActionsConfig <a name="ActionsRepositoryPermissionsAllowedActionsConfig" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsRepositoryPermissionsAllowedActionsConfig {
    bool|IResolvable GithubOwnedAllowed,
    string[] PatternsAllowed = null,
    bool|IResolvable VerifiedAllowed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig.property.githubOwnedAllowed">GithubOwnedAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether GitHub-owned actions are allowed in the repository. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig.property.patternsAllowed">PatternsAllowed</a></code> | <code>string[]</code> | Specifies a list of string-matching patterns to allow specific action(s). |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig.property.verifiedAllowed">VerifiedAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether actions in GitHub Marketplace from verified creators are allowed. |

---

##### `GithubOwnedAllowed`<sup>Required</sup> <a name="GithubOwnedAllowed" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig.property.githubOwnedAllowed"></a>

```csharp
public bool|IResolvable GithubOwnedAllowed { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether GitHub-owned actions are allowed in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_permissions#github_owned_allowed ActionsRepositoryPermissions#github_owned_allowed}

---

##### `PatternsAllowed`<sup>Optional</sup> <a name="PatternsAllowed" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig.property.patternsAllowed"></a>

```csharp
public string[] PatternsAllowed { get; set; }
```

- *Type:* string[]

Specifies a list of string-matching patterns to allow specific action(s).

Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_permissions#patterns_allowed ActionsRepositoryPermissions#patterns_allowed}

---

##### `VerifiedAllowed`<sup>Optional</sup> <a name="VerifiedAllowed" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig.property.verifiedAllowed"></a>

```csharp
public bool|IResolvable VerifiedAllowed { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether actions in GitHub Marketplace from verified creators are allowed.

Set to 'true' to allow all GitHub Marketplace actions by verified creators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_permissions#verified_allowed ActionsRepositoryPermissions#verified_allowed}

---

### ActionsRepositoryPermissionsConfig <a name="ActionsRepositoryPermissionsConfig" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsRepositoryPermissionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Repository,
    string AllowedActions = null,
    ActionsRepositoryPermissionsAllowedActionsConfig AllowedActionsConfig = null,
    bool|IResolvable Enabled = null,
    string Id = null,
    bool|IResolvable ShaPinningRequired = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.repository">Repository</a></code> | <code>string</code> | The GitHub repository. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.allowedActions">AllowedActions</a></code> | <code>string</code> | The permissions policy that controls the actions that are allowed to run. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.allowedActionsConfig">AllowedActionsConfig</a></code> | <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig">ActionsRepositoryPermissionsAllowedActionsConfig</a></code> | allowed_actions_config block. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Should GitHub actions be enabled on this repository. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_permissions#id ActionsRepositoryPermissions#id}. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.shaPinningRequired">ShaPinningRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether pinning to a specific SHA is required for all actions and reusable workflows in a repository. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_permissions#repository ActionsRepositoryPermissions#repository}

---

##### `AllowedActions`<sup>Optional</sup> <a name="AllowedActions" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.allowedActions"></a>

```csharp
public string AllowedActions { get; set; }
```

- *Type:* string

The permissions policy that controls the actions that are allowed to run.

Can be one of: 'all', 'local_only', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_permissions#allowed_actions ActionsRepositoryPermissions#allowed_actions}

---

##### `AllowedActionsConfig`<sup>Optional</sup> <a name="AllowedActionsConfig" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.allowedActionsConfig"></a>

```csharp
public ActionsRepositoryPermissionsAllowedActionsConfig AllowedActionsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig">ActionsRepositoryPermissionsAllowedActionsConfig</a>

allowed_actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_permissions#allowed_actions_config ActionsRepositoryPermissions#allowed_actions_config}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Should GitHub actions be enabled on this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_permissions#enabled ActionsRepositoryPermissions#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_permissions#id ActionsRepositoryPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ShaPinningRequired`<sup>Optional</sup> <a name="ShaPinningRequired" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.shaPinningRequired"></a>

```csharp
public bool|IResolvable ShaPinningRequired { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether pinning to a specific SHA is required for all actions and reusable workflows in a repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_permissions#sha_pinning_required ActionsRepositoryPermissions#sha_pinning_required}

---

## Classes <a name="Classes" id="Classes"></a>

### ActionsRepositoryPermissionsAllowedActionsConfigOutputReference <a name="ActionsRepositoryPermissionsAllowedActionsConfigOutputReference" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsRepositoryPermissionsAllowedActionsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed">ResetPatternsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed">ResetVerifiedAllowed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPatternsAllowed` <a name="ResetPatternsAllowed" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed"></a>

```csharp
private void ResetPatternsAllowed()
```

##### `ResetVerifiedAllowed` <a name="ResetVerifiedAllowed" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed"></a>

```csharp
private void ResetVerifiedAllowed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput">GithubOwnedAllowedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput">PatternsAllowedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput">VerifiedAllowedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed">GithubOwnedAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed">PatternsAllowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed">VerifiedAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig">ActionsRepositoryPermissionsAllowedActionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GithubOwnedAllowedInput`<sup>Optional</sup> <a name="GithubOwnedAllowedInput" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput"></a>

```csharp
public bool|IResolvable GithubOwnedAllowedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PatternsAllowedInput`<sup>Optional</sup> <a name="PatternsAllowedInput" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput"></a>

```csharp
public string[] PatternsAllowedInput { get; }
```

- *Type:* string[]

---

##### `VerifiedAllowedInput`<sup>Optional</sup> <a name="VerifiedAllowedInput" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput"></a>

```csharp
public bool|IResolvable VerifiedAllowedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GithubOwnedAllowed`<sup>Required</sup> <a name="GithubOwnedAllowed" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed"></a>

```csharp
public bool|IResolvable GithubOwnedAllowed { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PatternsAllowed`<sup>Required</sup> <a name="PatternsAllowed" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed"></a>

```csharp
public string[] PatternsAllowed { get; }
```

- *Type:* string[]

---

##### `VerifiedAllowed`<sup>Required</sup> <a name="VerifiedAllowed" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed"></a>

```csharp
public bool|IResolvable VerifiedAllowed { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.internalValue"></a>

```csharp
public ActionsRepositoryPermissionsAllowedActionsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig">ActionsRepositoryPermissionsAllowedActionsConfig</a>

---



