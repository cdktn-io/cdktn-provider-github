# `dependabotOrganizationSecret` Submodule <a name="`dependabotOrganizationSecret` Submodule" id="@cdktn/provider-github.dependabotOrganizationSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DependabotOrganizationSecret <a name="DependabotOrganizationSecret" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret github_dependabot_organization_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DependabotOrganizationSecret(Construct Scope, string Id, DependabotOrganizationSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig">DependabotOrganizationSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig">DependabotOrganizationSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetEncryptedValue">ResetEncryptedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetPlaintextValue">ResetPlaintextValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetSelectedRepositoryIds">ResetSelectedRepositoryIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetValueEncrypted">ResetValueEncrypted</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEncryptedValue` <a name="ResetEncryptedValue" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetEncryptedValue"></a>

```csharp
private void ResetEncryptedValue()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetKeyId"></a>

```csharp
private void ResetKeyId()
```

##### `ResetPlaintextValue` <a name="ResetPlaintextValue" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetPlaintextValue"></a>

```csharp
private void ResetPlaintextValue()
```

##### `ResetSelectedRepositoryIds` <a name="ResetSelectedRepositoryIds" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetSelectedRepositoryIds"></a>

```csharp
private void ResetSelectedRepositoryIds()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueEncrypted` <a name="ResetValueEncrypted" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetValueEncrypted"></a>

```csharp
private void ResetValueEncrypted()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DependabotOrganizationSecret resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

DependabotOrganizationSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

DependabotOrganizationSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

DependabotOrganizationSecret.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

DependabotOrganizationSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DependabotOrganizationSecret resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DependabotOrganizationSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DependabotOrganizationSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DependabotOrganizationSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.remoteUpdatedAt">RemoteUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValueInput">EncryptedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValueInput">PlaintextValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIdsInput">SelectedRepositoryIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.valueEncryptedInput">ValueEncryptedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValue">EncryptedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValue">PlaintextValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.valueEncrypted">ValueEncrypted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `RemoteUpdatedAt`<sup>Required</sup> <a name="RemoteUpdatedAt" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.remoteUpdatedAt"></a>

```csharp
public string RemoteUpdatedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `EncryptedValueInput`<sup>Optional</sup> <a name="EncryptedValueInput" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValueInput"></a>

```csharp
public string EncryptedValueInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `PlaintextValueInput`<sup>Optional</sup> <a name="PlaintextValueInput" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValueInput"></a>

```csharp
public string PlaintextValueInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `SelectedRepositoryIdsInput`<sup>Optional</sup> <a name="SelectedRepositoryIdsInput" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIdsInput"></a>

```csharp
public double[] SelectedRepositoryIdsInput { get; }
```

- *Type:* double[]

---

##### `ValueEncryptedInput`<sup>Optional</sup> <a name="ValueEncryptedInput" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.valueEncryptedInput"></a>

```csharp
public string ValueEncryptedInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `EncryptedValue`<sup>Required</sup> <a name="EncryptedValue" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValue"></a>

```csharp
public string EncryptedValue { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `PlaintextValue`<sup>Required</sup> <a name="PlaintextValue" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValue"></a>

```csharp
public string PlaintextValue { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; }
```

- *Type:* double[]

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ValueEncrypted`<sup>Required</sup> <a name="ValueEncrypted" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.valueEncrypted"></a>

```csharp
public string ValueEncrypted { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DependabotOrganizationSecretConfig <a name="DependabotOrganizationSecretConfig" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DependabotOrganizationSecretConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SecretName,
    string Visibility,
    string EncryptedValue = null,
    string Id = null,
    string KeyId = null,
    string PlaintextValue = null,
    double[] SelectedRepositoryIds = null,
    string Value = null,
    string ValueEncrypted = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.secretName">SecretName</a></code> | <code>string</code> | Name of the secret. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.visibility">Visibility</a></code> | <code>string</code> | Configures the access that repositories have to the organization secret. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.encryptedValue">EncryptedValue</a></code> | <code>string</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret#id DependabotOrganizationSecret#id}. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.keyId">KeyId</a></code> | <code>string</code> | ID of the public key used to encrypt the secret. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.plaintextValue">PlaintextValue</a></code> | <code>string</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | An array of repository ids that can access the organization secret. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.value">Value</a></code> | <code>string</code> | Plaintext value to be encrypted. |
| <code><a href="#@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.valueEncrypted">ValueEncrypted</a></code> | <code>string</code> | Value encrypted with the GitHub public key, defined by key_id, in Base64 format. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret#secret_name DependabotOrganizationSecret#secret_name}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

Configures the access that repositories have to the organization secret.

Must be one of 'all', 'private' or 'selected'. 'selected_repository_ids' is required if set to 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret#visibility DependabotOrganizationSecret#visibility}

---

##### `EncryptedValue`<sup>Optional</sup> <a name="EncryptedValue" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.encryptedValue"></a>

```csharp
public string EncryptedValue { get; set; }
```

- *Type:* string

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret#encrypted_value DependabotOrganizationSecret#encrypted_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret#id DependabotOrganizationSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

ID of the public key used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret#key_id DependabotOrganizationSecret#key_id}

---

##### `PlaintextValue`<sup>Optional</sup> <a name="PlaintextValue" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.plaintextValue"></a>

```csharp
public string PlaintextValue { get; set; }
```

- *Type:* string

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret#plaintext_value DependabotOrganizationSecret#plaintext_value}

---

##### `SelectedRepositoryIds`<sup>Optional</sup> <a name="SelectedRepositoryIds" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; set; }
```

- *Type:* double[]

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret#selected_repository_ids DependabotOrganizationSecret#selected_repository_ids}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Plaintext value to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret#value DependabotOrganizationSecret#value}

---

##### `ValueEncrypted`<sup>Optional</sup> <a name="ValueEncrypted" id="@cdktn/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.valueEncrypted"></a>

```csharp
public string ValueEncrypted { get; set; }
```

- *Type:* string

Value encrypted with the GitHub public key, defined by key_id, in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/dependabot_organization_secret#value_encrypted DependabotOrganizationSecret#value_encrypted}

---



