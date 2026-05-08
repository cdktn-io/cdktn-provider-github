# `enterpriseActionsRunnerGroup` Submodule <a name="`enterpriseActionsRunnerGroup` Submodule" id="@cdktn/provider-github.enterpriseActionsRunnerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseActionsRunnerGroup <a name="EnterpriseActionsRunnerGroup" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_actions_runner_group github_enterprise_actions_runner_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new EnterpriseActionsRunnerGroup(Construct Scope, string Id, EnterpriseActionsRunnerGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig">EnterpriseActionsRunnerGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig">EnterpriseActionsRunnerGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetAllowsPublicRepositories">ResetAllowsPublicRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetRestrictedToWorkflows">ResetRestrictedToWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedOrganizationIds">ResetSelectedOrganizationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedWorkflows">ResetSelectedWorkflows</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowsPublicRepositories` <a name="ResetAllowsPublicRepositories" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetAllowsPublicRepositories"></a>

```csharp
private void ResetAllowsPublicRepositories()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRestrictedToWorkflows` <a name="ResetRestrictedToWorkflows" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetRestrictedToWorkflows"></a>

```csharp
private void ResetRestrictedToWorkflows()
```

##### `ResetSelectedOrganizationIds` <a name="ResetSelectedOrganizationIds" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedOrganizationIds"></a>

```csharp
private void ResetSelectedOrganizationIds()
```

##### `ResetSelectedWorkflows` <a name="ResetSelectedWorkflows" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedWorkflows"></a>

```csharp
private void ResetSelectedWorkflows()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EnterpriseActionsRunnerGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

EnterpriseActionsRunnerGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

EnterpriseActionsRunnerGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

EnterpriseActionsRunnerGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

EnterpriseActionsRunnerGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EnterpriseActionsRunnerGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnterpriseActionsRunnerGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnterpriseActionsRunnerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_actions_runner_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EnterpriseActionsRunnerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.default">Default</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.runnersUrl">RunnersUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationsUrl">SelectedOrganizationsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositoriesInput">AllowsPublicRepositoriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlugInput">EnterpriseSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflowsInput">RestrictedToWorkflowsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIdsInput">SelectedOrganizationIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflowsInput">SelectedWorkflowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositories">AllowsPublicRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlug">EnterpriseSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflows">RestrictedToWorkflows</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIds">SelectedOrganizationIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflows">SelectedWorkflows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `RunnersUrl`<sup>Required</sup> <a name="RunnersUrl" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.runnersUrl"></a>

```csharp
public string RunnersUrl { get; }
```

- *Type:* string

---

##### `SelectedOrganizationsUrl`<sup>Required</sup> <a name="SelectedOrganizationsUrl" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationsUrl"></a>

```csharp
public string SelectedOrganizationsUrl { get; }
```

- *Type:* string

---

##### `AllowsPublicRepositoriesInput`<sup>Optional</sup> <a name="AllowsPublicRepositoriesInput" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositoriesInput"></a>

```csharp
public bool|IResolvable AllowsPublicRepositoriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnterpriseSlugInput`<sup>Optional</sup> <a name="EnterpriseSlugInput" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlugInput"></a>

```csharp
public string EnterpriseSlugInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RestrictedToWorkflowsInput`<sup>Optional</sup> <a name="RestrictedToWorkflowsInput" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflowsInput"></a>

```csharp
public bool|IResolvable RestrictedToWorkflowsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SelectedOrganizationIdsInput`<sup>Optional</sup> <a name="SelectedOrganizationIdsInput" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIdsInput"></a>

```csharp
public double[] SelectedOrganizationIdsInput { get; }
```

- *Type:* double[]

---

##### `SelectedWorkflowsInput`<sup>Optional</sup> <a name="SelectedWorkflowsInput" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflowsInput"></a>

```csharp
public string[] SelectedWorkflowsInput { get; }
```

- *Type:* string[]

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `AllowsPublicRepositories`<sup>Required</sup> <a name="AllowsPublicRepositories" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositories"></a>

```csharp
public bool|IResolvable AllowsPublicRepositories { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnterpriseSlug`<sup>Required</sup> <a name="EnterpriseSlug" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlug"></a>

```csharp
public string EnterpriseSlug { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RestrictedToWorkflows`<sup>Required</sup> <a name="RestrictedToWorkflows" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflows"></a>

```csharp
public bool|IResolvable RestrictedToWorkflows { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SelectedOrganizationIds`<sup>Required</sup> <a name="SelectedOrganizationIds" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIds"></a>

```csharp
public double[] SelectedOrganizationIds { get; }
```

- *Type:* double[]

---

##### `SelectedWorkflows`<sup>Required</sup> <a name="SelectedWorkflows" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflows"></a>

```csharp
public string[] SelectedWorkflows { get; }
```

- *Type:* string[]

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseActionsRunnerGroupConfig <a name="EnterpriseActionsRunnerGroupConfig" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new EnterpriseActionsRunnerGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EnterpriseSlug,
    string Name,
    string Visibility,
    bool|IResolvable AllowsPublicRepositories = null,
    string Id = null,
    bool|IResolvable RestrictedToWorkflows = null,
    double[] SelectedOrganizationIds = null,
    string[] SelectedWorkflows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.enterpriseSlug">EnterpriseSlug</a></code> | <code>string</code> | The slug of the enterprise. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.name">Name</a></code> | <code>string</code> | Name of the runner group. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.visibility">Visibility</a></code> | <code>string</code> | The visibility of the runner group. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.allowsPublicRepositories">AllowsPublicRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether public repositories can be added to the runner group. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.restrictedToWorkflows">RestrictedToWorkflows</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedOrganizationIds">SelectedOrganizationIds</a></code> | <code>double[]</code> | List of organization IDs that can access the runner group. |
| <code><a href="#@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedWorkflows">SelectedWorkflows</a></code> | <code>string[]</code> | List of workflows the runner group should be allowed to run. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EnterpriseSlug`<sup>Required</sup> <a name="EnterpriseSlug" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.enterpriseSlug"></a>

```csharp
public string EnterpriseSlug { get; set; }
```

- *Type:* string

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_actions_runner_group#enterprise_slug EnterpriseActionsRunnerGroup#enterprise_slug}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_actions_runner_group#name EnterpriseActionsRunnerGroup#name}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

The visibility of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_actions_runner_group#visibility EnterpriseActionsRunnerGroup#visibility}

---

##### `AllowsPublicRepositories`<sup>Optional</sup> <a name="AllowsPublicRepositories" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.allowsPublicRepositories"></a>

```csharp
public bool|IResolvable AllowsPublicRepositories { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether public repositories can be added to the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_actions_runner_group#allows_public_repositories EnterpriseActionsRunnerGroup#allows_public_repositories}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RestrictedToWorkflows`<sup>Optional</sup> <a name="RestrictedToWorkflows" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.restrictedToWorkflows"></a>

```csharp
public bool|IResolvable RestrictedToWorkflows { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array.

Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_actions_runner_group#restricted_to_workflows EnterpriseActionsRunnerGroup#restricted_to_workflows}

---

##### `SelectedOrganizationIds`<sup>Optional</sup> <a name="SelectedOrganizationIds" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedOrganizationIds"></a>

```csharp
public double[] SelectedOrganizationIds { get; set; }
```

- *Type:* double[]

List of organization IDs that can access the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_actions_runner_group#selected_organization_ids EnterpriseActionsRunnerGroup#selected_organization_ids}

---

##### `SelectedWorkflows`<sup>Optional</sup> <a name="SelectedWorkflows" id="@cdktn/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedWorkflows"></a>

```csharp
public string[] SelectedWorkflows { get; set; }
```

- *Type:* string[]

List of workflows the runner group should be allowed to run.

This setting will be ignored unless restricted_to_workflows is set to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_actions_runner_group#selected_workflows EnterpriseActionsRunnerGroup#selected_workflows}

---



