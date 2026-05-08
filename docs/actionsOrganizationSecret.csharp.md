# `actionsOrganizationSecret` Submodule <a name="`actionsOrganizationSecret` Submodule" id="@cdktn/provider-github.actionsOrganizationSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationSecret <a name="ActionsOrganizationSecret" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret github_actions_organization_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsOrganizationSecret(Construct Scope, string Id, ActionsOrganizationSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig">ActionsOrganizationSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig">ActionsOrganizationSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetDestroyOnDrift">ResetDestroyOnDrift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetEncryptedValue">ResetEncryptedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetPlaintextValue">ResetPlaintextValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetSelectedRepositoryIds">ResetSelectedRepositoryIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetValueEncrypted">ResetValueEncrypted</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDestroyOnDrift` <a name="ResetDestroyOnDrift" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetDestroyOnDrift"></a>

```csharp
private void ResetDestroyOnDrift()
```

##### `ResetEncryptedValue` <a name="ResetEncryptedValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetEncryptedValue"></a>

```csharp
private void ResetEncryptedValue()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetKeyId"></a>

```csharp
private void ResetKeyId()
```

##### `ResetPlaintextValue` <a name="ResetPlaintextValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetPlaintextValue"></a>

```csharp
private void ResetPlaintextValue()
```

##### `ResetSelectedRepositoryIds` <a name="ResetSelectedRepositoryIds" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetSelectedRepositoryIds"></a>

```csharp
private void ResetSelectedRepositoryIds()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueEncrypted` <a name="ResetValueEncrypted" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.resetValueEncrypted"></a>

```csharp
private void ResetValueEncrypted()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ActionsOrganizationSecret resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsOrganizationSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsOrganizationSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsOrganizationSecret.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsOrganizationSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ActionsOrganizationSecret resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsOrganizationSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsOrganizationSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ActionsOrganizationSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.remoteUpdatedAt">RemoteUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.destroyOnDriftInput">DestroyOnDriftInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.encryptedValueInput">EncryptedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.plaintextValueInput">PlaintextValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.selectedRepositoryIdsInput">SelectedRepositoryIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.valueEncryptedInput">ValueEncryptedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.destroyOnDrift">DestroyOnDrift</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.encryptedValue">EncryptedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.plaintextValue">PlaintextValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.valueEncrypted">ValueEncrypted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `RemoteUpdatedAt`<sup>Required</sup> <a name="RemoteUpdatedAt" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.remoteUpdatedAt"></a>

```csharp
public string RemoteUpdatedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DestroyOnDriftInput`<sup>Optional</sup> <a name="DestroyOnDriftInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.destroyOnDriftInput"></a>

```csharp
public bool|IResolvable DestroyOnDriftInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptedValueInput`<sup>Optional</sup> <a name="EncryptedValueInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.encryptedValueInput"></a>

```csharp
public string EncryptedValueInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `PlaintextValueInput`<sup>Optional</sup> <a name="PlaintextValueInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.plaintextValueInput"></a>

```csharp
public string PlaintextValueInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `SelectedRepositoryIdsInput`<sup>Optional</sup> <a name="SelectedRepositoryIdsInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.selectedRepositoryIdsInput"></a>

```csharp
public double[] SelectedRepositoryIdsInput { get; }
```

- *Type:* double[]

---

##### `ValueEncryptedInput`<sup>Optional</sup> <a name="ValueEncryptedInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.valueEncryptedInput"></a>

```csharp
public string ValueEncryptedInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `DestroyOnDrift`<sup>Required</sup> <a name="DestroyOnDrift" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.destroyOnDrift"></a>

```csharp
public bool|IResolvable DestroyOnDrift { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptedValue`<sup>Required</sup> <a name="EncryptedValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.encryptedValue"></a>

```csharp
public string EncryptedValue { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `PlaintextValue`<sup>Required</sup> <a name="PlaintextValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.plaintextValue"></a>

```csharp
public string PlaintextValue { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; }
```

- *Type:* double[]

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ValueEncrypted`<sup>Required</sup> <a name="ValueEncrypted" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.valueEncrypted"></a>

```csharp
public string ValueEncrypted { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationSecretConfig <a name="ActionsOrganizationSecretConfig" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsOrganizationSecretConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SecretName,
    string Visibility,
    bool|IResolvable DestroyOnDrift = null,
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
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.secretName">SecretName</a></code> | <code>string</code> | Name of the secret. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.visibility">Visibility</a></code> | <code>string</code> | Configures the access that repositories have to the organization secret. Must be one of 'all', 'private', or 'selected'. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.destroyOnDrift">DestroyOnDrift</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#destroy_on_drift ActionsOrganizationSecret#destroy_on_drift}. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.encryptedValue">EncryptedValue</a></code> | <code>string</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#id ActionsOrganizationSecret#id}. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.keyId">KeyId</a></code> | <code>string</code> | ID of the public key used to encrypt the secret. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.plaintextValue">PlaintextValue</a></code> | <code>string</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | An array of repository IDs that can access the organization secret. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.value">Value</a></code> | <code>string</code> | Plaintext value to be encrypted. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.valueEncrypted">ValueEncrypted</a></code> | <code>string</code> | Value encrypted with the GitHub public key, defined by key_id, in Base64 format. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#secret_name ActionsOrganizationSecret#secret_name}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

Configures the access that repositories have to the organization secret. Must be one of 'all', 'private', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#visibility ActionsOrganizationSecret#visibility}

---

##### `DestroyOnDrift`<sup>Optional</sup> <a name="DestroyOnDrift" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.destroyOnDrift"></a>

```csharp
public bool|IResolvable DestroyOnDrift { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#destroy_on_drift ActionsOrganizationSecret#destroy_on_drift}.

---

##### `EncryptedValue`<sup>Optional</sup> <a name="EncryptedValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.encryptedValue"></a>

```csharp
public string EncryptedValue { get; set; }
```

- *Type:* string

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#encrypted_value ActionsOrganizationSecret#encrypted_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#id ActionsOrganizationSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

ID of the public key used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#key_id ActionsOrganizationSecret#key_id}

---

##### `PlaintextValue`<sup>Optional</sup> <a name="PlaintextValue" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.plaintextValue"></a>

```csharp
public string PlaintextValue { get; set; }
```

- *Type:* string

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#plaintext_value ActionsOrganizationSecret#plaintext_value}

---

##### `SelectedRepositoryIds`<sup>Optional</sup> <a name="SelectedRepositoryIds" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; set; }
```

- *Type:* double[]

An array of repository IDs that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#selected_repository_ids ActionsOrganizationSecret#selected_repository_ids}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Plaintext value to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#value ActionsOrganizationSecret#value}

---

##### `ValueEncrypted`<sup>Optional</sup> <a name="ValueEncrypted" id="@cdktn/provider-github.actionsOrganizationSecret.ActionsOrganizationSecretConfig.property.valueEncrypted"></a>

```csharp
public string ValueEncrypted { get; set; }
```

- *Type:* string

Value encrypted with the GitHub public key, defined by key_id, in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_organization_secret#value_encrypted ActionsOrganizationSecret#value_encrypted}

---



