# `repositoryEnvironment` Submodule <a name="`repositoryEnvironment` Submodule" id="@cdktn/provider-github.repositoryEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryEnvironment <a name="RepositoryEnvironment" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_environment github_repository_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new RepositoryEnvironment(Construct Scope, string Id, RepositoryEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig">RepositoryEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig">RepositoryEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.putDeploymentBranchPolicy">PutDeploymentBranchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.putReviewers">PutReviewers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.resetCanAdminsBypass">ResetCanAdminsBypass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.resetDeploymentBranchPolicy">ResetDeploymentBranchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.resetPreventSelfReview">ResetPreventSelfReview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.resetReviewers">ResetReviewers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.resetWaitTimer">ResetWaitTimer</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeploymentBranchPolicy` <a name="PutDeploymentBranchPolicy" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.putDeploymentBranchPolicy"></a>

```csharp
private void PutDeploymentBranchPolicy(RepositoryEnvironmentDeploymentBranchPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.putDeploymentBranchPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

---

##### `PutReviewers` <a name="PutReviewers" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.putReviewers"></a>

```csharp
private void PutReviewers(RepositoryEnvironmentReviewers Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.putReviewers.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>

---

##### `ResetCanAdminsBypass` <a name="ResetCanAdminsBypass" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.resetCanAdminsBypass"></a>

```csharp
private void ResetCanAdminsBypass()
```

##### `ResetDeploymentBranchPolicy` <a name="ResetDeploymentBranchPolicy" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.resetDeploymentBranchPolicy"></a>

```csharp
private void ResetDeploymentBranchPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPreventSelfReview` <a name="ResetPreventSelfReview" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.resetPreventSelfReview"></a>

```csharp
private void ResetPreventSelfReview()
```

##### `ResetReviewers` <a name="ResetReviewers" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.resetReviewers"></a>

```csharp
private void ResetReviewers()
```

##### `ResetWaitTimer` <a name="ResetWaitTimer" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.resetWaitTimer"></a>

```csharp
private void ResetWaitTimer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RepositoryEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RepositoryEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RepositoryEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RepositoryEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RepositoryEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicy">DeploymentBranchPolicy</a></code> | <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference">RepositoryEnvironmentDeploymentBranchPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repositoryId">RepositoryId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewers">Reviewers</a></code> | <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference">RepositoryEnvironmentReviewersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.canAdminsBypassInput">CanAdminsBypassInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicyInput">DeploymentBranchPolicyInput</a></code> | <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.preventSelfReviewInput">PreventSelfReviewInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewersInput">ReviewersInput</a></code> | <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimerInput">WaitTimerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.canAdminsBypass">CanAdminsBypass</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.preventSelfReview">PreventSelfReview</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimer">WaitTimer</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeploymentBranchPolicy`<sup>Required</sup> <a name="DeploymentBranchPolicy" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicy"></a>

```csharp
public RepositoryEnvironmentDeploymentBranchPolicyOutputReference DeploymentBranchPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference">RepositoryEnvironmentDeploymentBranchPolicyOutputReference</a>

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repositoryId"></a>

```csharp
public double RepositoryId { get; }
```

- *Type:* double

---

##### `Reviewers`<sup>Required</sup> <a name="Reviewers" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewers"></a>

```csharp
public RepositoryEnvironmentReviewersOutputReference Reviewers { get; }
```

- *Type:* <a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference">RepositoryEnvironmentReviewersOutputReference</a>

---

##### `CanAdminsBypassInput`<sup>Optional</sup> <a name="CanAdminsBypassInput" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.canAdminsBypassInput"></a>

```csharp
public bool|IResolvable CanAdminsBypassInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeploymentBranchPolicyInput`<sup>Optional</sup> <a name="DeploymentBranchPolicyInput" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicyInput"></a>

```csharp
public RepositoryEnvironmentDeploymentBranchPolicy DeploymentBranchPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PreventSelfReviewInput`<sup>Optional</sup> <a name="PreventSelfReviewInput" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.preventSelfReviewInput"></a>

```csharp
public bool|IResolvable PreventSelfReviewInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `ReviewersInput`<sup>Optional</sup> <a name="ReviewersInput" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewersInput"></a>

```csharp
public RepositoryEnvironmentReviewers ReviewersInput { get; }
```

- *Type:* <a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>

---

##### `WaitTimerInput`<sup>Optional</sup> <a name="WaitTimerInput" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimerInput"></a>

```csharp
public double WaitTimerInput { get; }
```

- *Type:* double

---

##### `CanAdminsBypass`<sup>Required</sup> <a name="CanAdminsBypass" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.canAdminsBypass"></a>

```csharp
public bool|IResolvable CanAdminsBypass { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PreventSelfReview`<sup>Required</sup> <a name="PreventSelfReview" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.preventSelfReview"></a>

```csharp
public bool|IResolvable PreventSelfReview { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `WaitTimer`<sup>Required</sup> <a name="WaitTimer" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimer"></a>

```csharp
public double WaitTimer { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryEnvironmentConfig <a name="RepositoryEnvironmentConfig" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new RepositoryEnvironmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Environment,
    string Repository,
    bool|IResolvable CanAdminsBypass = null,
    RepositoryEnvironmentDeploymentBranchPolicy DeploymentBranchPolicy = null,
    string Id = null,
    bool|IResolvable PreventSelfReview = null,
    RepositoryEnvironmentReviewers Reviewers = null,
    double WaitTimer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.environment">Environment</a></code> | <code>string</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.repository">Repository</a></code> | <code>string</code> | The repository of the environment. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.canAdminsBypass">CanAdminsBypass</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Can Admins bypass deployment protections. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.deploymentBranchPolicy">DeploymentBranchPolicy</a></code> | <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a></code> | deployment_branch_policy block. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_environment#id RepositoryEnvironment#id}. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.preventSelfReview">PreventSelfReview</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Prevent users from approving workflows runs that they triggered. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.reviewers">Reviewers</a></code> | <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a></code> | reviewers block. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.waitTimer">WaitTimer</a></code> | <code>double</code> | Amount of time to delay a job after the job is initially triggered. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_environment#environment RepositoryEnvironment#environment}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The repository of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_environment#repository RepositoryEnvironment#repository}

---

##### `CanAdminsBypass`<sup>Optional</sup> <a name="CanAdminsBypass" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.canAdminsBypass"></a>

```csharp
public bool|IResolvable CanAdminsBypass { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Can Admins bypass deployment protections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_environment#can_admins_bypass RepositoryEnvironment#can_admins_bypass}

---

##### `DeploymentBranchPolicy`<sup>Optional</sup> <a name="DeploymentBranchPolicy" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.deploymentBranchPolicy"></a>

```csharp
public RepositoryEnvironmentDeploymentBranchPolicy DeploymentBranchPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

deployment_branch_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_environment#deployment_branch_policy RepositoryEnvironment#deployment_branch_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_environment#id RepositoryEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PreventSelfReview`<sup>Optional</sup> <a name="PreventSelfReview" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.preventSelfReview"></a>

```csharp
public bool|IResolvable PreventSelfReview { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Prevent users from approving workflows runs that they triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_environment#prevent_self_review RepositoryEnvironment#prevent_self_review}

---

##### `Reviewers`<sup>Optional</sup> <a name="Reviewers" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.reviewers"></a>

```csharp
public RepositoryEnvironmentReviewers Reviewers { get; set; }
```

- *Type:* <a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>

reviewers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_environment#reviewers RepositoryEnvironment#reviewers}

---

##### `WaitTimer`<sup>Optional</sup> <a name="WaitTimer" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.waitTimer"></a>

```csharp
public double WaitTimer { get; set; }
```

- *Type:* double

Amount of time to delay a job after the job is initially triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_environment#wait_timer RepositoryEnvironment#wait_timer}

---

### RepositoryEnvironmentDeploymentBranchPolicy <a name="RepositoryEnvironmentDeploymentBranchPolicy" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new RepositoryEnvironmentDeploymentBranchPolicy {
    bool|IResolvable CustomBranchPolicies,
    bool|IResolvable ProtectedBranches
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.customBranchPolicies">CustomBranchPolicies</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether only branches that match the specified name patterns can deploy to this environment. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.protectedBranches">ProtectedBranches</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether only branches with branch protection rules can deploy to this environment. |

---

##### `CustomBranchPolicies`<sup>Required</sup> <a name="CustomBranchPolicies" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.customBranchPolicies"></a>

```csharp
public bool|IResolvable CustomBranchPolicies { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether only branches that match the specified name patterns can deploy to this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_environment#custom_branch_policies RepositoryEnvironment#custom_branch_policies}

---

##### `ProtectedBranches`<sup>Required</sup> <a name="ProtectedBranches" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.protectedBranches"></a>

```csharp
public bool|IResolvable ProtectedBranches { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether only branches with branch protection rules can deploy to this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_environment#protected_branches RepositoryEnvironment#protected_branches}

---

### RepositoryEnvironmentReviewers <a name="RepositoryEnvironmentReviewers" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new RepositoryEnvironmentReviewers {
    double[] Teams = null,
    double[] Users = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.teams">Teams</a></code> | <code>double[]</code> | Up to 6 IDs for teams who may review jobs that reference the environment. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.users">Users</a></code> | <code>double[]</code> | Up to 6 IDs for users who may review jobs that reference the environment. |

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.teams"></a>

```csharp
public double[] Teams { get; set; }
```

- *Type:* double[]

Up to 6 IDs for teams who may review jobs that reference the environment.

Reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_environment#teams RepositoryEnvironment#teams}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.users"></a>

```csharp
public double[] Users { get; set; }
```

- *Type:* double[]

Up to 6 IDs for users who may review jobs that reference the environment.

Reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_environment#users RepositoryEnvironment#users}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryEnvironmentDeploymentBranchPolicyOutputReference <a name="RepositoryEnvironmentDeploymentBranchPolicyOutputReference" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new RepositoryEnvironmentDeploymentBranchPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPoliciesInput">CustomBranchPoliciesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranchesInput">ProtectedBranchesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPolicies">CustomBranchPolicies</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranches">ProtectedBranches</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomBranchPoliciesInput`<sup>Optional</sup> <a name="CustomBranchPoliciesInput" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPoliciesInput"></a>

```csharp
public bool|IResolvable CustomBranchPoliciesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProtectedBranchesInput`<sup>Optional</sup> <a name="ProtectedBranchesInput" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranchesInput"></a>

```csharp
public bool|IResolvable ProtectedBranchesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CustomBranchPolicies`<sup>Required</sup> <a name="CustomBranchPolicies" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPolicies"></a>

```csharp
public bool|IResolvable CustomBranchPolicies { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProtectedBranches`<sup>Required</sup> <a name="ProtectedBranches" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranches"></a>

```csharp
public bool|IResolvable ProtectedBranches { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.internalValue"></a>

```csharp
public RepositoryEnvironmentDeploymentBranchPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

---


### RepositoryEnvironmentReviewersOutputReference <a name="RepositoryEnvironmentReviewersOutputReference" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new RepositoryEnvironmentReviewersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTeams` <a name="ResetTeams" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetUsers"></a>

```csharp
private void ResetUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teamsInput">TeamsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.usersInput">UsersInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teams">Teams</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.users">Users</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teamsInput"></a>

```csharp
public double[] TeamsInput { get; }
```

- *Type:* double[]

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.usersInput"></a>

```csharp
public double[] UsersInput { get; }
```

- *Type:* double[]

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teams"></a>

```csharp
public double[] Teams { get; }
```

- *Type:* double[]

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.users"></a>

```csharp
public double[] Users { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.internalValue"></a>

```csharp
public RepositoryEnvironmentReviewers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers">RepositoryEnvironmentReviewers</a>

---



