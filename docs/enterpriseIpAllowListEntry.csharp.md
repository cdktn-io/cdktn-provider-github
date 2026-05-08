# `enterpriseIpAllowListEntry` Submodule <a name="`enterpriseIpAllowListEntry` Submodule" id="@cdktn/provider-github.enterpriseIpAllowListEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseIpAllowListEntry <a name="EnterpriseIpAllowListEntry" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry github_enterprise_ip_allow_list_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new EnterpriseIpAllowListEntry(Construct Scope, string Id, EnterpriseIpAllowListEntryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig">EnterpriseIpAllowListEntryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig">EnterpriseIpAllowListEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetIsActive">ResetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsActive` <a name="ResetIsActive" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetIsActive"></a>

```csharp
private void ResetIsActive()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EnterpriseIpAllowListEntry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

EnterpriseIpAllowListEntry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

EnterpriseIpAllowListEntry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

EnterpriseIpAllowListEntry.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

EnterpriseIpAllowListEntry.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EnterpriseIpAllowListEntry resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnterpriseIpAllowListEntry to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnterpriseIpAllowListEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EnterpriseIpAllowListEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlugInput">EnterpriseSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActiveInput">IsActiveInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlug">EnterpriseSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActive">IsActive</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `EnterpriseSlugInput`<sup>Optional</sup> <a name="EnterpriseSlugInput" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlugInput"></a>

```csharp
public string EnterpriseSlugInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActiveInput"></a>

```csharp
public bool|IResolvable IsActiveInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EnterpriseSlug`<sup>Required</sup> <a name="EnterpriseSlug" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.enterpriseSlug"></a>

```csharp
public string EnterpriseSlug { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.isActive"></a>

```csharp
public bool|IResolvable IsActive { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseIpAllowListEntryConfig <a name="EnterpriseIpAllowListEntryConfig" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new EnterpriseIpAllowListEntryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EnterpriseSlug,
    string Ip,
    string Id = null,
    bool|IResolvable IsActive = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.enterpriseSlug">EnterpriseSlug</a></code> | <code>string</code> | The slug of the enterprise to apply the IP allow list entry to. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.ip">Ip</a></code> | <code>string</code> | An IP address or range of IP addresses in CIDR notation. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#id EnterpriseIpAllowListEntry#id}. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.isActive">IsActive</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the entry is currently active. |
| <code><a href="#@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.name">Name</a></code> | <code>string</code> | An optional name for the IP allow list entry. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EnterpriseSlug`<sup>Required</sup> <a name="EnterpriseSlug" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.enterpriseSlug"></a>

```csharp
public string EnterpriseSlug { get; set; }
```

- *Type:* string

The slug of the enterprise to apply the IP allow list entry to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#enterprise_slug EnterpriseIpAllowListEntry#enterprise_slug}

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

An IP address or range of IP addresses in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#ip EnterpriseIpAllowListEntry#ip}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#id EnterpriseIpAllowListEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsActive`<sup>Optional</sup> <a name="IsActive" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.isActive"></a>

```csharp
public bool|IResolvable IsActive { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the entry is currently active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#is_active EnterpriseIpAllowListEntry#is_active}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-github.enterpriseIpAllowListEntry.EnterpriseIpAllowListEntryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

An optional name for the IP allow list entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/enterprise_ip_allow_list_entry#name EnterpriseIpAllowListEntry#name}

---



