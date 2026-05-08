# `dependabotOrganizationSecretRepositories` Submodule <a name="`dependabotOrganizationSecretRepositories` Submodule" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DependabotOrganizationSecretRepositories <a name="DependabotOrganizationSecretRepositories" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret_repositories github_dependabot_organization_secret_repositories}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DependabotOrganizationSecretRepositories(Construct Scope, string Id, DependabotOrganizationSecretRepositoriesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig">DependabotOrganizationSecretRepositoriesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig">DependabotOrganizationSecretRepositoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DependabotOrganizationSecretRepositories resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

DependabotOrganizationSecretRepositories.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

DependabotOrganizationSecretRepositories.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

DependabotOrganizationSecretRepositories.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

DependabotOrganizationSecretRepositories.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DependabotOrganizationSecretRepositories resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DependabotOrganizationSecretRepositories to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DependabotOrganizationSecretRepositories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret_repositories#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DependabotOrganizationSecretRepositories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.selectedRepositoryIdsInput">SelectedRepositoryIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `SelectedRepositoryIdsInput`<sup>Optional</sup> <a name="SelectedRepositoryIdsInput" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.selectedRepositoryIdsInput"></a>

```csharp
public double[] SelectedRepositoryIdsInput { get; }
```

- *Type:* double[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; }
```

- *Type:* double[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DependabotOrganizationSecretRepositoriesConfig <a name="DependabotOrganizationSecretRepositoriesConfig" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DependabotOrganizationSecretRepositoriesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SecretName,
    double[] SelectedRepositoryIds,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.secretName">SecretName</a></code> | <code>string</code> | Name of the existing secret. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | An array of repository ids that can access the organization secret. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret_repositories#id DependabotOrganizationSecretRepositories#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Name of the existing secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret_repositories#secret_name DependabotOrganizationSecretRepositories#secret_name}

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; set; }
```

- *Type:* double[]

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret_repositories#selected_repository_ids DependabotOrganizationSecretRepositories#selected_repository_ids}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret_repositories#id DependabotOrganizationSecretRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



