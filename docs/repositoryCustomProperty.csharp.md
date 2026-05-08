# `repositoryCustomProperty` Submodule <a name="`repositoryCustomProperty` Submodule" id="@cdktn/provider-github.repositoryCustomProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryCustomProperty <a name="RepositoryCustomProperty" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property github_repository_custom_property}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new RepositoryCustomProperty(Construct Scope, string Id, RepositoryCustomPropertyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig">RepositoryCustomPropertyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig">RepositoryCustomPropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RepositoryCustomProperty resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryCustomProperty.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryCustomProperty.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryCustomProperty.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

RepositoryCustomProperty.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RepositoryCustomProperty resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RepositoryCustomProperty to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RepositoryCustomProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RepositoryCustomProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyNameInput">PropertyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyTypeInput">PropertyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyValueInput">PropertyValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyName">PropertyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyType">PropertyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyValue">PropertyValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.repository">Repository</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PropertyNameInput`<sup>Optional</sup> <a name="PropertyNameInput" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyNameInput"></a>

```csharp
public string PropertyNameInput { get; }
```

- *Type:* string

---

##### `PropertyTypeInput`<sup>Optional</sup> <a name="PropertyTypeInput" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyTypeInput"></a>

```csharp
public string PropertyTypeInput { get; }
```

- *Type:* string

---

##### `PropertyValueInput`<sup>Optional</sup> <a name="PropertyValueInput" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyValueInput"></a>

```csharp
public string[] PropertyValueInput { get; }
```

- *Type:* string[]

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PropertyName`<sup>Required</sup> <a name="PropertyName" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyName"></a>

```csharp
public string PropertyName { get; }
```

- *Type:* string

---

##### `PropertyType`<sup>Required</sup> <a name="PropertyType" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyType"></a>

```csharp
public string PropertyType { get; }
```

- *Type:* string

---

##### `PropertyValue`<sup>Required</sup> <a name="PropertyValue" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.propertyValue"></a>

```csharp
public string[] PropertyValue { get; }
```

- *Type:* string[]

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomProperty.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryCustomPropertyConfig <a name="RepositoryCustomPropertyConfig" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new RepositoryCustomPropertyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PropertyName,
    string PropertyType,
    string[] PropertyValue,
    string Repository,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.propertyName">PropertyName</a></code> | <code>string</code> | Name of the custom property. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.propertyType">PropertyType</a></code> | <code>string</code> | Type of the custom property. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.propertyValue">PropertyValue</a></code> | <code>string[]</code> | Value of the custom property. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.repository">Repository</a></code> | <code>string</code> | Name of the repository which the custom properties should be on. |
| <code><a href="#@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#id RepositoryCustomProperty#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PropertyName`<sup>Required</sup> <a name="PropertyName" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.propertyName"></a>

```csharp
public string PropertyName { get; set; }
```

- *Type:* string

Name of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#property_name RepositoryCustomProperty#property_name}

---

##### `PropertyType`<sup>Required</sup> <a name="PropertyType" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.propertyType"></a>

```csharp
public string PropertyType { get; set; }
```

- *Type:* string

Type of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#property_type RepositoryCustomProperty#property_type}

---

##### `PropertyValue`<sup>Required</sup> <a name="PropertyValue" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.propertyValue"></a>

```csharp
public string[] PropertyValue { get; set; }
```

- *Type:* string[]

Value of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#property_value RepositoryCustomProperty#property_value}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Name of the repository which the custom properties should be on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#repository RepositoryCustomProperty#repository}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.repositoryCustomProperty.RepositoryCustomPropertyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_custom_property#id RepositoryCustomProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



