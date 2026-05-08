# `repositoryPullRequest` Submodule <a name="`repositoryPullRequest` Submodule" id="@cdktn/provider-github.repositoryPullRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryPullRequest <a name="RepositoryPullRequest" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pull_request github_repository_pull_request}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new RepositoryPullRequest(Construct Scope, string Id, RepositoryPullRequestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig">RepositoryPullRequestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig">RepositoryPullRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.resetMaintainerCanModify">ResetMaintainerCanModify</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOwner">ResetOwner</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaintainerCanModify` <a name="ResetMaintainerCanModify" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.resetMaintainerCanModify"></a>

```csharp
private void ResetMaintainerCanModify()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOwner"></a>

```csharp
private void ResetOwner()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RepositoryPullRequest resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryPullRequest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryPullRequest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryPullRequest.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryPullRequest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RepositoryPullRequest resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RepositoryPullRequest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RepositoryPullRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pull_request#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RepositoryPullRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseSha">BaseSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.draft">Draft</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headSha">HeadSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.number">Number</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedAt">OpenedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedBy">OpenedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRefInput">BaseRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepositoryInput">BaseRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRefInput">HeadRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModifyInput">MaintainerCanModifyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRef">BaseRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepository">BaseRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRef">HeadRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModify">MaintainerCanModify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.title">Title</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BaseSha`<sup>Required</sup> <a name="BaseSha" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseSha"></a>

```csharp
public string BaseSha { get; }
```

- *Type:* string

---

##### `Draft`<sup>Required</sup> <a name="Draft" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.draft"></a>

```csharp
public IResolvable Draft { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `HeadSha`<sup>Required</sup> <a name="HeadSha" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headSha"></a>

```csharp
public string HeadSha { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.number"></a>

```csharp
public double Number { get; }
```

- *Type:* double

---

##### `OpenedAt`<sup>Required</sup> <a name="OpenedAt" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedAt"></a>

```csharp
public double OpenedAt { get; }
```

- *Type:* double

---

##### `OpenedBy`<sup>Required</sup> <a name="OpenedBy" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedBy"></a>

```csharp
public string OpenedBy { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `BaseRefInput`<sup>Optional</sup> <a name="BaseRefInput" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRefInput"></a>

```csharp
public string BaseRefInput { get; }
```

- *Type:* string

---

##### `BaseRepositoryInput`<sup>Optional</sup> <a name="BaseRepositoryInput" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepositoryInput"></a>

```csharp
public string BaseRepositoryInput { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `HeadRefInput`<sup>Optional</sup> <a name="HeadRefInput" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRefInput"></a>

```csharp
public string HeadRefInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaintainerCanModifyInput`<sup>Optional</sup> <a name="MaintainerCanModifyInput" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModifyInput"></a>

```csharp
public bool|IResolvable MaintainerCanModifyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `BaseRef`<sup>Required</sup> <a name="BaseRef" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRef"></a>

```csharp
public string BaseRef { get; }
```

- *Type:* string

---

##### `BaseRepository`<sup>Required</sup> <a name="BaseRepository" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepository"></a>

```csharp
public string BaseRepository { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `HeadRef`<sup>Required</sup> <a name="HeadRef" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRef"></a>

```csharp
public string HeadRef { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaintainerCanModify`<sup>Required</sup> <a name="MaintainerCanModify" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModify"></a>

```csharp
public bool|IResolvable MaintainerCanModify { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryPullRequestConfig <a name="RepositoryPullRequestConfig" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new RepositoryPullRequestConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BaseRef,
    string BaseRepository,
    string HeadRef,
    string Title,
    string Body = null,
    string Id = null,
    bool|IResolvable MaintainerCanModify = null,
    string Owner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRef">BaseRef</a></code> | <code>string</code> | Name of the branch serving as the base of the Pull Request. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRepository">BaseRepository</a></code> | <code>string</code> | Name of the base repository to retrieve the Pull Requests from. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.headRef">HeadRef</a></code> | <code>string</code> | Name of the branch serving as the head of the Pull Request. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.title">Title</a></code> | <code>string</code> | The title of the Pull Request. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.body">Body</a></code> | <code>string</code> | Body of the Pull Request. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pull_request#id RepositoryPullRequest#id}. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.maintainerCanModify">MaintainerCanModify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'. |
| <code><a href="#@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.owner">Owner</a></code> | <code>string</code> | Owner of the repository. If not provided, the provider's default owner is used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BaseRef`<sup>Required</sup> <a name="BaseRef" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRef"></a>

```csharp
public string BaseRef { get; set; }
```

- *Type:* string

Name of the branch serving as the base of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pull_request#base_ref RepositoryPullRequest#base_ref}

---

##### `BaseRepository`<sup>Required</sup> <a name="BaseRepository" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRepository"></a>

```csharp
public string BaseRepository { get; set; }
```

- *Type:* string

Name of the base repository to retrieve the Pull Requests from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pull_request#base_repository RepositoryPullRequest#base_repository}

---

##### `HeadRef`<sup>Required</sup> <a name="HeadRef" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.headRef"></a>

```csharp
public string HeadRef { get; set; }
```

- *Type:* string

Name of the branch serving as the head of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pull_request#head_ref RepositoryPullRequest#head_ref}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pull_request#title RepositoryPullRequest#title}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

Body of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pull_request#body RepositoryPullRequest#body}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pull_request#id RepositoryPullRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintainerCanModify`<sup>Optional</sup> <a name="MaintainerCanModify" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.maintainerCanModify"></a>

```csharp
public bool|IResolvable MaintainerCanModify { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pull_request#maintainer_can_modify RepositoryPullRequest#maintainer_can_modify}

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Owner of the repository. If not provided, the provider's default owner is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pull_request#owner RepositoryPullRequest#owner}

---



