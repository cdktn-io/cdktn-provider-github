# `actionsEnvironmentSecret` Submodule <a name="`actionsEnvironmentSecret` Submodule" id="@cdktn/provider-github.actionsEnvironmentSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsEnvironmentSecret <a name="ActionsEnvironmentSecret" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret github_actions_environment_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsEnvironmentSecret(Construct Scope, string Id, ActionsEnvironmentSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig">ActionsEnvironmentSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig">ActionsEnvironmentSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetEncryptedValue">ResetEncryptedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetPlaintextValue">ResetPlaintextValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetValueEncrypted">ResetValueEncrypted</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEncryptedValue` <a name="ResetEncryptedValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetEncryptedValue"></a>

```csharp
private void ResetEncryptedValue()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetKeyId"></a>

```csharp
private void ResetKeyId()
```

##### `ResetPlaintextValue` <a name="ResetPlaintextValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetPlaintextValue"></a>

```csharp
private void ResetPlaintextValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueEncrypted` <a name="ResetValueEncrypted" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetValueEncrypted"></a>

```csharp
private void ResetValueEncrypted()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ActionsEnvironmentSecret resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsEnvironmentSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsEnvironmentSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsEnvironmentSecret.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsEnvironmentSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ActionsEnvironmentSecret resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsEnvironmentSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsEnvironmentSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ActionsEnvironmentSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.remoteUpdatedAt">RemoteUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repositoryId">RepositoryId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValueInput">EncryptedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValueInput">PlaintextValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.valueEncryptedInput">ValueEncryptedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValue">EncryptedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValue">PlaintextValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.valueEncrypted">ValueEncrypted</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `RemoteUpdatedAt`<sup>Required</sup> <a name="RemoteUpdatedAt" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.remoteUpdatedAt"></a>

```csharp
public string RemoteUpdatedAt { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repositoryId"></a>

```csharp
public double RepositoryId { get; }
```

- *Type:* double

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `EncryptedValueInput`<sup>Optional</sup> <a name="EncryptedValueInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValueInput"></a>

```csharp
public string EncryptedValueInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `PlaintextValueInput`<sup>Optional</sup> <a name="PlaintextValueInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValueInput"></a>

```csharp
public string PlaintextValueInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `ValueEncryptedInput`<sup>Optional</sup> <a name="ValueEncryptedInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.valueEncryptedInput"></a>

```csharp
public string ValueEncryptedInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `EncryptedValue`<sup>Required</sup> <a name="EncryptedValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValue"></a>

```csharp
public string EncryptedValue { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `PlaintextValue`<sup>Required</sup> <a name="PlaintextValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValue"></a>

```csharp
public string PlaintextValue { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ValueEncrypted`<sup>Required</sup> <a name="ValueEncrypted" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.valueEncrypted"></a>

```csharp
public string ValueEncrypted { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsEnvironmentSecretConfig <a name="ActionsEnvironmentSecretConfig" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsEnvironmentSecretConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Environment,
    string Repository,
    string SecretName,
    string EncryptedValue = null,
    string Id = null,
    string KeyId = null,
    string PlaintextValue = null,
    string Value = null,
    string ValueEncrypted = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.environment">Environment</a></code> | <code>string</code> | Name of the environment. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.repository">Repository</a></code> | <code>string</code> | Name of the repository. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.secretName">SecretName</a></code> | <code>string</code> | Name of the secret. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.encryptedValue">EncryptedValue</a></code> | <code>string</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#id ActionsEnvironmentSecret#id}. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.keyId">KeyId</a></code> | <code>string</code> | ID of the public key used to encrypt the secret. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.plaintextValue">PlaintextValue</a></code> | <code>string</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.value">Value</a></code> | <code>string</code> | Plaintext value to be encrypted. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.valueEncrypted">ValueEncrypted</a></code> | <code>string</code> | Value encrypted with the GitHub public key, defined by key_id, in Base64 format. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#environment ActionsEnvironmentSecret#environment}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#repository ActionsEnvironmentSecret#repository}

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#secret_name ActionsEnvironmentSecret#secret_name}

---

##### `EncryptedValue`<sup>Optional</sup> <a name="EncryptedValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.encryptedValue"></a>

```csharp
public string EncryptedValue { get; set; }
```

- *Type:* string

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#encrypted_value ActionsEnvironmentSecret#encrypted_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#id ActionsEnvironmentSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

ID of the public key used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#key_id ActionsEnvironmentSecret#key_id}

---

##### `PlaintextValue`<sup>Optional</sup> <a name="PlaintextValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.plaintextValue"></a>

```csharp
public string PlaintextValue { get; set; }
```

- *Type:* string

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#plaintext_value ActionsEnvironmentSecret#plaintext_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Plaintext value to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#value ActionsEnvironmentSecret#value}

---

##### `ValueEncrypted`<sup>Optional</sup> <a name="ValueEncrypted" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.valueEncrypted"></a>

```csharp
public string ValueEncrypted { get; set; }
```

- *Type:* string

Value encrypted with the GitHub public key, defined by key_id, in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#value_encrypted ActionsEnvironmentSecret#value_encrypted}

---



