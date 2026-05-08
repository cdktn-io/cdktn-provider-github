# `actionsOrganizationWorkflowPermissions` Submodule <a name="`actionsOrganizationWorkflowPermissions` Submodule" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationWorkflowPermissions <a name="ActionsOrganizationWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions github_actions_organization_workflow_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsOrganizationWorkflowPermissions(Construct Scope, string Id, ActionsOrganizationWorkflowPermissionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig">ActionsOrganizationWorkflowPermissionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig">ActionsOrganizationWorkflowPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetCanApprovePullRequestReviews">ResetCanApprovePullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetDefaultWorkflowPermissions">ResetDefaultWorkflowPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCanApprovePullRequestReviews` <a name="ResetCanApprovePullRequestReviews" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetCanApprovePullRequestReviews"></a>

```csharp
private void ResetCanApprovePullRequestReviews()
```

##### `ResetDefaultWorkflowPermissions` <a name="ResetDefaultWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetDefaultWorkflowPermissions"></a>

```csharp
private void ResetDefaultWorkflowPermissions()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ActionsOrganizationWorkflowPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsOrganizationWorkflowPermissions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsOrganizationWorkflowPermissions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsOrganizationWorkflowPermissions.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsOrganizationWorkflowPermissions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ActionsOrganizationWorkflowPermissions resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsOrganizationWorkflowPermissions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsOrganizationWorkflowPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ActionsOrganizationWorkflowPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviewsInput">CanApprovePullRequestReviewsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissionsInput">DefaultWorkflowPermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlugInput">OrganizationSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviews">CanApprovePullRequestReviews</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissions">DefaultWorkflowPermissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlug">OrganizationSlug</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CanApprovePullRequestReviewsInput`<sup>Optional</sup> <a name="CanApprovePullRequestReviewsInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviewsInput"></a>

```csharp
public bool|IResolvable CanApprovePullRequestReviewsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DefaultWorkflowPermissionsInput`<sup>Optional</sup> <a name="DefaultWorkflowPermissionsInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissionsInput"></a>

```csharp
public string DefaultWorkflowPermissionsInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrganizationSlugInput`<sup>Optional</sup> <a name="OrganizationSlugInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlugInput"></a>

```csharp
public string OrganizationSlugInput { get; }
```

- *Type:* string

---

##### `CanApprovePullRequestReviews`<sup>Required</sup> <a name="CanApprovePullRequestReviews" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviews"></a>

```csharp
public bool|IResolvable CanApprovePullRequestReviews { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DefaultWorkflowPermissions`<sup>Required</sup> <a name="DefaultWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissions"></a>

```csharp
public string DefaultWorkflowPermissions { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrganizationSlug`<sup>Required</sup> <a name="OrganizationSlug" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlug"></a>

```csharp
public string OrganizationSlug { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationWorkflowPermissionsConfig <a name="ActionsOrganizationWorkflowPermissionsConfig" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsOrganizationWorkflowPermissionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string OrganizationSlug,
    bool|IResolvable CanApprovePullRequestReviews = null,
    string DefaultWorkflowPermissions = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.organizationSlug">OrganizationSlug</a></code> | <code>string</code> | The slug of the Organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.canApprovePullRequestReviews">CanApprovePullRequestReviews</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether GitHub Actions can approve pull request reviews in any repository in the organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.defaultWorkflowPermissions">DefaultWorkflowPermissions</a></code> | <code>string</code> | The default workflow permissions granted to the GITHUB_TOKEN when running workflows in any repository in the organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#id ActionsOrganizationWorkflowPermissions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `OrganizationSlug`<sup>Required</sup> <a name="OrganizationSlug" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.organizationSlug"></a>

```csharp
public string OrganizationSlug { get; set; }
```

- *Type:* string

The slug of the Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#organization_slug ActionsOrganizationWorkflowPermissions#organization_slug}

---

##### `CanApprovePullRequestReviews`<sup>Optional</sup> <a name="CanApprovePullRequestReviews" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.canApprovePullRequestReviews"></a>

```csharp
public bool|IResolvable CanApprovePullRequestReviews { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether GitHub Actions can approve pull request reviews in any repository in the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#can_approve_pull_request_reviews ActionsOrganizationWorkflowPermissions#can_approve_pull_request_reviews}

---

##### `DefaultWorkflowPermissions`<sup>Optional</sup> <a name="DefaultWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.defaultWorkflowPermissions"></a>

```csharp
public string DefaultWorkflowPermissions { get; set; }
```

- *Type:* string

The default workflow permissions granted to the GITHUB_TOKEN when running workflows in any repository in the organization.

Can be 'read' or 'write'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#default_workflow_permissions ActionsOrganizationWorkflowPermissions#default_workflow_permissions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_workflow_permissions#id ActionsOrganizationWorkflowPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



