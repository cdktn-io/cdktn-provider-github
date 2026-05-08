# `repositoryPages` Submodule <a name="`repositoryPages` Submodule" id="@cdktn/provider-github.repositoryPages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryPagesA <a name="RepositoryPagesA" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages github_repository_pages}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new RepositoryPagesA(Construct Scope, string Id, RepositoryPagesAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig">RepositoryPagesAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig">RepositoryPagesAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetBuildType">ResetBuildType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetCname">ResetCname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetHttpsEnforced">ResetHttpsEnforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetPublic">ResetPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource"></a>

```csharp
private void PutSource(RepositoryPagesSourceA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

---

##### `ResetBuildType` <a name="ResetBuildType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetBuildType"></a>

```csharp
private void ResetBuildType()
```

##### `ResetCname` <a name="ResetCname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetCname"></a>

```csharp
private void ResetCname()
```

##### `ResetHttpsEnforced` <a name="ResetHttpsEnforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetHttpsEnforced"></a>

```csharp
private void ResetHttpsEnforced()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPublic` <a name="ResetPublic" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetPublic"></a>

```csharp
private void ResetPublic()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetSource"></a>

```csharp
private void ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RepositoryPagesA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryPagesA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryPagesA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryPagesA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryPagesA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RepositoryPagesA resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RepositoryPagesA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RepositoryPagesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RepositoryPagesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.apiUrl">ApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildStatus">BuildStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.custom404">Custom404</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.htmlUrl">HtmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryId">RepositoryId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.source">Source</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference">RepositoryPagesSourceAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildTypeInput">BuildTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cnameInput">CnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforcedInput">HttpsEnforcedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.publicInput">PublicInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildType">BuildType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cname">Cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforced">HttpsEnforced</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.public">Public</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repository">Repository</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.apiUrl"></a>

```csharp
public string ApiUrl { get; }
```

- *Type:* string

---

##### `BuildStatus`<sup>Required</sup> <a name="BuildStatus" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildStatus"></a>

```csharp
public string BuildStatus { get; }
```

- *Type:* string

---

##### `Custom404`<sup>Required</sup> <a name="Custom404" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.custom404"></a>

```csharp
public IResolvable Custom404 { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.htmlUrl"></a>

```csharp
public string HtmlUrl { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryId"></a>

```csharp
public double RepositoryId { get; }
```

- *Type:* double

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.source"></a>

```csharp
public RepositoryPagesSourceAOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference">RepositoryPagesSourceAOutputReference</a>

---

##### `BuildTypeInput`<sup>Optional</sup> <a name="BuildTypeInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildTypeInput"></a>

```csharp
public string BuildTypeInput { get; }
```

- *Type:* string

---

##### `CnameInput`<sup>Optional</sup> <a name="CnameInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cnameInput"></a>

```csharp
public string CnameInput { get; }
```

- *Type:* string

---

##### `HttpsEnforcedInput`<sup>Optional</sup> <a name="HttpsEnforcedInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforcedInput"></a>

```csharp
public bool|IResolvable HttpsEnforcedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PublicInput`<sup>Optional</sup> <a name="PublicInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.publicInput"></a>

```csharp
public bool|IResolvable PublicInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.sourceInput"></a>

```csharp
public RepositoryPagesSourceA SourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

---

##### `BuildType`<sup>Required</sup> <a name="BuildType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildType"></a>

```csharp
public string BuildType { get; }
```

- *Type:* string

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cname"></a>

```csharp
public string Cname { get; }
```

- *Type:* string

---

##### `HttpsEnforced`<sup>Required</sup> <a name="HttpsEnforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforced"></a>

```csharp
public bool|IResolvable HttpsEnforced { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Public`<sup>Required</sup> <a name="Public" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.public"></a>

```csharp
public bool|IResolvable Public { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryPagesAConfig <a name="RepositoryPagesAConfig" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new RepositoryPagesAConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Repository,
    string BuildType = null,
    string Cname = null,
    bool|IResolvable HttpsEnforced = null,
    string Id = null,
    bool|IResolvable Public = null,
    RepositoryPagesSourceA Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.repository">Repository</a></code> | <code>string</code> | The repository name to configure GitHub Pages for. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.buildType">BuildType</a></code> | <code>string</code> | The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.cname">Cname</a></code> | <code>string</code> | The custom domain for the repository. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.httpsEnforced">HttpsEnforced</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#id RepositoryPagesA#id}. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.public">Public</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the GitHub Pages site is publicly visible. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | source block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The repository name to configure GitHub Pages for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#repository RepositoryPagesA#repository}

---

##### `BuildType`<sup>Optional</sup> <a name="BuildType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.buildType"></a>

```csharp
public string BuildType { get; set; }
```

- *Type:* string

The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#build_type RepositoryPagesA#build_type}

---

##### `Cname`<sup>Optional</sup> <a name="Cname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.cname"></a>

```csharp
public string Cname { get; set; }
```

- *Type:* string

The custom domain for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#cname RepositoryPagesA#cname}

---

##### `HttpsEnforced`<sup>Optional</sup> <a name="HttpsEnforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.httpsEnforced"></a>

```csharp
public bool|IResolvable HttpsEnforced { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#https_enforced RepositoryPagesA#https_enforced}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#id RepositoryPagesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Public`<sup>Optional</sup> <a name="Public" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.public"></a>

```csharp
public bool|IResolvable Public { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the GitHub Pages site is publicly visible.

If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#public RepositoryPagesA#public}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.source"></a>

```csharp
public RepositoryPagesSourceA Source { get; set; }
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#source RepositoryPagesA#source}

---

### RepositoryPagesSourceA <a name="RepositoryPagesSourceA" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new RepositoryPagesSourceA {
    string Branch,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.branch">Branch</a></code> | <code>string</code> | The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages'). |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.path">Path</a></code> | <code>string</code> | The repository directory from which the site publishes (Default: '/'). |

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#branch RepositoryPagesA#branch}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The repository directory from which the site publishes (Default: '/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#path RepositoryPagesA#path}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryPagesSourceAOutputReference <a name="RepositoryPagesSourceAOutputReference" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new RepositoryPagesSourceAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.internalValue"></a>

```csharp
public RepositoryPagesSourceA InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

---



