# `actionsOrganizationPermissions` Submodule <a name="`actionsOrganizationPermissions` Submodule" id="@cdktn/provider-github.actionsOrganizationPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationPermissions <a name="ActionsOrganizationPermissions" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_permissions github_actions_organization_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsOrganizationPermissions(Construct Scope, string Id, ActionsOrganizationPermissionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig">ActionsOrganizationPermissionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig">ActionsOrganizationPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putAllowedActionsConfig">PutAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putEnabledRepositoriesConfig">PutEnabledRepositoriesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetAllowedActions">ResetAllowedActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetAllowedActionsConfig">ResetAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetEnabledRepositoriesConfig">ResetEnabledRepositoriesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetShaPinningRequired">ResetShaPinningRequired</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllowedActionsConfig` <a name="PutAllowedActionsConfig" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putAllowedActionsConfig"></a>

```csharp
private void PutAllowedActionsConfig(ActionsOrganizationPermissionsAllowedActionsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putAllowedActionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a>

---

##### `PutEnabledRepositoriesConfig` <a name="PutEnabledRepositoriesConfig" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putEnabledRepositoriesConfig"></a>

```csharp
private void PutEnabledRepositoriesConfig(ActionsOrganizationPermissionsEnabledRepositoriesConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putEnabledRepositoriesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a>

---

##### `ResetAllowedActions` <a name="ResetAllowedActions" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetAllowedActions"></a>

```csharp
private void ResetAllowedActions()
```

##### `ResetAllowedActionsConfig` <a name="ResetAllowedActionsConfig" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetAllowedActionsConfig"></a>

```csharp
private void ResetAllowedActionsConfig()
```

##### `ResetEnabledRepositoriesConfig` <a name="ResetEnabledRepositoriesConfig" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetEnabledRepositoriesConfig"></a>

```csharp
private void ResetEnabledRepositoriesConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetShaPinningRequired` <a name="ResetShaPinningRequired" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetShaPinningRequired"></a>

```csharp
private void ResetShaPinningRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ActionsOrganizationPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsOrganizationPermissions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsOrganizationPermissions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsOrganizationPermissions.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsOrganizationPermissions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ActionsOrganizationPermissions resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsOrganizationPermissions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsOrganizationPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_permissions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ActionsOrganizationPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsConfig">AllowedActionsConfig</a></code> | <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference">ActionsOrganizationPermissionsAllowedActionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesConfig">EnabledRepositoriesConfig</a></code> | <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference">ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsConfigInput">AllowedActionsConfigInput</a></code> | <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsInput">AllowedActionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesConfigInput">EnabledRepositoriesConfigInput</a></code> | <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesInput">EnabledRepositoriesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.shaPinningRequiredInput">ShaPinningRequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActions">AllowedActions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositories">EnabledRepositories</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.shaPinningRequired">ShaPinningRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowedActionsConfig`<sup>Required</sup> <a name="AllowedActionsConfig" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsConfig"></a>

```csharp
public ActionsOrganizationPermissionsAllowedActionsConfigOutputReference AllowedActionsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference">ActionsOrganizationPermissionsAllowedActionsConfigOutputReference</a>

---

##### `EnabledRepositoriesConfig`<sup>Required</sup> <a name="EnabledRepositoriesConfig" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesConfig"></a>

```csharp
public ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference EnabledRepositoriesConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference">ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference</a>

---

##### `AllowedActionsConfigInput`<sup>Optional</sup> <a name="AllowedActionsConfigInput" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsConfigInput"></a>

```csharp
public ActionsOrganizationPermissionsAllowedActionsConfig AllowedActionsConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a>

---

##### `AllowedActionsInput`<sup>Optional</sup> <a name="AllowedActionsInput" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsInput"></a>

```csharp
public string AllowedActionsInput { get; }
```

- *Type:* string

---

##### `EnabledRepositoriesConfigInput`<sup>Optional</sup> <a name="EnabledRepositoriesConfigInput" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesConfigInput"></a>

```csharp
public ActionsOrganizationPermissionsEnabledRepositoriesConfig EnabledRepositoriesConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a>

---

##### `EnabledRepositoriesInput`<sup>Optional</sup> <a name="EnabledRepositoriesInput" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesInput"></a>

```csharp
public string EnabledRepositoriesInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ShaPinningRequiredInput`<sup>Optional</sup> <a name="ShaPinningRequiredInput" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.shaPinningRequiredInput"></a>

```csharp
public bool|IResolvable ShaPinningRequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowedActions`<sup>Required</sup> <a name="AllowedActions" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActions"></a>

```csharp
public string AllowedActions { get; }
```

- *Type:* string

---

##### `EnabledRepositories`<sup>Required</sup> <a name="EnabledRepositories" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositories"></a>

```csharp
public string EnabledRepositories { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ShaPinningRequired`<sup>Required</sup> <a name="ShaPinningRequired" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.shaPinningRequired"></a>

```csharp
public bool|IResolvable ShaPinningRequired { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationPermissionsAllowedActionsConfig <a name="ActionsOrganizationPermissionsAllowedActionsConfig" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsOrganizationPermissionsAllowedActionsConfig {
    bool|IResolvable GithubOwnedAllowed,
    string[] PatternsAllowed = null,
    bool|IResolvable VerifiedAllowed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.githubOwnedAllowed">GithubOwnedAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether GitHub-owned actions are allowed in the organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.patternsAllowed">PatternsAllowed</a></code> | <code>string[]</code> | Specifies a list of string-matching patterns to allow specific action(s). |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.verifiedAllowed">VerifiedAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether actions in GitHub Marketplace from verified creators are allowed. |

---

##### `GithubOwnedAllowed`<sup>Required</sup> <a name="GithubOwnedAllowed" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.githubOwnedAllowed"></a>

```csharp
public bool|IResolvable GithubOwnedAllowed { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether GitHub-owned actions are allowed in the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_permissions#github_owned_allowed ActionsOrganizationPermissions#github_owned_allowed}

---

##### `PatternsAllowed`<sup>Optional</sup> <a name="PatternsAllowed" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.patternsAllowed"></a>

```csharp
public string[] PatternsAllowed { get; set; }
```

- *Type:* string[]

Specifies a list of string-matching patterns to allow specific action(s).

Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_permissions#patterns_allowed ActionsOrganizationPermissions#patterns_allowed}

---

##### `VerifiedAllowed`<sup>Optional</sup> <a name="VerifiedAllowed" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.verifiedAllowed"></a>

```csharp
public bool|IResolvable VerifiedAllowed { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether actions in GitHub Marketplace from verified creators are allowed.

Set to 'true' to allow all GitHub Marketplace actions by verified creators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_permissions#verified_allowed ActionsOrganizationPermissions#verified_allowed}

---

### ActionsOrganizationPermissionsConfig <a name="ActionsOrganizationPermissionsConfig" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsOrganizationPermissionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EnabledRepositories,
    string AllowedActions = null,
    ActionsOrganizationPermissionsAllowedActionsConfig AllowedActionsConfig = null,
    ActionsOrganizationPermissionsEnabledRepositoriesConfig EnabledRepositoriesConfig = null,
    string Id = null,
    bool|IResolvable ShaPinningRequired = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.enabledRepositories">EnabledRepositories</a></code> | <code>string</code> | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.allowedActions">AllowedActions</a></code> | <code>string</code> | The permissions policy that controls the actions that are allowed to run. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.allowedActionsConfig">AllowedActionsConfig</a></code> | <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a></code> | allowed_actions_config block. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.enabledRepositoriesConfig">EnabledRepositoriesConfig</a></code> | <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a></code> | enabled_repositories_config block. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_permissions#id ActionsOrganizationPermissions#id}. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.shaPinningRequired">ShaPinningRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether pinning to a specific SHA is required for all actions and reusable workflows in an organization. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EnabledRepositories`<sup>Required</sup> <a name="EnabledRepositories" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.enabledRepositories"></a>

```csharp
public string EnabledRepositories { get; set; }
```

- *Type:* string

The policy that controls the repositories in the organization that are allowed to run GitHub Actions.

Can be one of: 'all', 'none', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_permissions#enabled_repositories ActionsOrganizationPermissions#enabled_repositories}

---

##### `AllowedActions`<sup>Optional</sup> <a name="AllowedActions" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.allowedActions"></a>

```csharp
public string AllowedActions { get; set; }
```

- *Type:* string

The permissions policy that controls the actions that are allowed to run.

Can be one of: 'all', 'local_only', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_permissions#allowed_actions ActionsOrganizationPermissions#allowed_actions}

---

##### `AllowedActionsConfig`<sup>Optional</sup> <a name="AllowedActionsConfig" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.allowedActionsConfig"></a>

```csharp
public ActionsOrganizationPermissionsAllowedActionsConfig AllowedActionsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a>

allowed_actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_permissions#allowed_actions_config ActionsOrganizationPermissions#allowed_actions_config}

---

##### `EnabledRepositoriesConfig`<sup>Optional</sup> <a name="EnabledRepositoriesConfig" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.enabledRepositoriesConfig"></a>

```csharp
public ActionsOrganizationPermissionsEnabledRepositoriesConfig EnabledRepositoriesConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a>

enabled_repositories_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_permissions#enabled_repositories_config ActionsOrganizationPermissions#enabled_repositories_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_permissions#id ActionsOrganizationPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ShaPinningRequired`<sup>Optional</sup> <a name="ShaPinningRequired" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.shaPinningRequired"></a>

```csharp
public bool|IResolvable ShaPinningRequired { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether pinning to a specific SHA is required for all actions and reusable workflows in an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_permissions#sha_pinning_required ActionsOrganizationPermissions#sha_pinning_required}

---

### ActionsOrganizationPermissionsEnabledRepositoriesConfig <a name="ActionsOrganizationPermissionsEnabledRepositoriesConfig" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsOrganizationPermissionsEnabledRepositoriesConfig {
    double[] RepositoryIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig.property.repositoryIds">RepositoryIds</a></code> | <code>double[]</code> | List of repository IDs to enable for GitHub Actions. |

---

##### `RepositoryIds`<sup>Required</sup> <a name="RepositoryIds" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig.property.repositoryIds"></a>

```csharp
public double[] RepositoryIds { get; set; }
```

- *Type:* double[]

List of repository IDs to enable for GitHub Actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_permissions#repository_ids ActionsOrganizationPermissions#repository_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### ActionsOrganizationPermissionsAllowedActionsConfigOutputReference <a name="ActionsOrganizationPermissionsAllowedActionsConfigOutputReference" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsOrganizationPermissionsAllowedActionsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed">ResetPatternsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed">ResetVerifiedAllowed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPatternsAllowed` <a name="ResetPatternsAllowed" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed"></a>

```csharp
private void ResetPatternsAllowed()
```

##### `ResetVerifiedAllowed` <a name="ResetVerifiedAllowed" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed"></a>

```csharp
private void ResetVerifiedAllowed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput">GithubOwnedAllowedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput">PatternsAllowedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput">VerifiedAllowedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed">GithubOwnedAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed">PatternsAllowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed">VerifiedAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GithubOwnedAllowedInput`<sup>Optional</sup> <a name="GithubOwnedAllowedInput" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput"></a>

```csharp
public bool|IResolvable GithubOwnedAllowedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PatternsAllowedInput`<sup>Optional</sup> <a name="PatternsAllowedInput" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput"></a>

```csharp
public string[] PatternsAllowedInput { get; }
```

- *Type:* string[]

---

##### `VerifiedAllowedInput`<sup>Optional</sup> <a name="VerifiedAllowedInput" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput"></a>

```csharp
public bool|IResolvable VerifiedAllowedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GithubOwnedAllowed`<sup>Required</sup> <a name="GithubOwnedAllowed" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed"></a>

```csharp
public bool|IResolvable GithubOwnedAllowed { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PatternsAllowed`<sup>Required</sup> <a name="PatternsAllowed" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed"></a>

```csharp
public string[] PatternsAllowed { get; }
```

- *Type:* string[]

---

##### `VerifiedAllowed`<sup>Required</sup> <a name="VerifiedAllowed" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed"></a>

```csharp
public bool|IResolvable VerifiedAllowed { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.internalValue"></a>

```csharp
public ActionsOrganizationPermissionsAllowedActionsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a>

---


### ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference <a name="ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.repositoryIdsInput">RepositoryIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.repositoryIds">RepositoryIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryIdsInput`<sup>Optional</sup> <a name="RepositoryIdsInput" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.repositoryIdsInput"></a>

```csharp
public double[] RepositoryIdsInput { get; }
```

- *Type:* double[]

---

##### `RepositoryIds`<sup>Required</sup> <a name="RepositoryIds" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.repositoryIds"></a>

```csharp
public double[] RepositoryIds { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.internalValue"></a>

```csharp
public ActionsOrganizationPermissionsEnabledRepositoriesConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a>

---



