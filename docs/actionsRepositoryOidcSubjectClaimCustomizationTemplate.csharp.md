# `actionsRepositoryOidcSubjectClaimCustomizationTemplate` Submodule <a name="`actionsRepositoryOidcSubjectClaimCustomizationTemplate` Submodule" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsRepositoryOidcSubjectClaimCustomizationTemplate <a name="ActionsRepositoryOidcSubjectClaimCustomizationTemplate" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_oidc_subject_claim_customization_template github_actions_repository_oidc_subject_claim_customization_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsRepositoryOidcSubjectClaimCustomizationTemplate(Construct Scope, string Id, ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig">ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig">ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetIncludeClaimKeys">ResetIncludeClaimKeys</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeClaimKeys` <a name="ResetIncludeClaimKeys" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetIncludeClaimKeys"></a>

```csharp
private void ResetIncludeClaimKeys()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ActionsRepositoryOidcSubjectClaimCustomizationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsRepositoryOidcSubjectClaimCustomizationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsRepositoryOidcSubjectClaimCustomizationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsRepositoryOidcSubjectClaimCustomizationTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

ActionsRepositoryOidcSubjectClaimCustomizationTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ActionsRepositoryOidcSubjectClaimCustomizationTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsRepositoryOidcSubjectClaimCustomizationTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsRepositoryOidcSubjectClaimCustomizationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_oidc_subject_claim_customization_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ActionsRepositoryOidcSubjectClaimCustomizationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeysInput">IncludeClaimKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefaultInput">UseDefaultInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeys">IncludeClaimKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefault">UseDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeClaimKeysInput`<sup>Optional</sup> <a name="IncludeClaimKeysInput" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeysInput"></a>

```csharp
public string[] IncludeClaimKeysInput { get; }
```

- *Type:* string[]

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `UseDefaultInput`<sup>Optional</sup> <a name="UseDefaultInput" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefaultInput"></a>

```csharp
public bool|IResolvable UseDefaultInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeClaimKeys`<sup>Required</sup> <a name="IncludeClaimKeys" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeys"></a>

```csharp
public string[] IncludeClaimKeys { get; }
```

- *Type:* string[]

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `UseDefault`<sup>Required</sup> <a name="UseDefault" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefault"></a>

```csharp
public bool|IResolvable UseDefault { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig <a name="ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Repository,
    bool|IResolvable UseDefault,
    string Id = null,
    string[] IncludeClaimKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.repository">Repository</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.useDefault">UseDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to use the default template or not. If 'true', 'include_claim_keys' must not be set. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_oidc_subject_claim_customization_template#id ActionsRepositoryOidcSubjectClaimCustomizationTemplate#id}. |
| <code><a href="#@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.includeClaimKeys">IncludeClaimKeys</a></code> | <code>string[]</code> | A list of OpenID Connect claims. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_oidc_subject_claim_customization_template#repository ActionsRepositoryOidcSubjectClaimCustomizationTemplate#repository}

---

##### `UseDefault`<sup>Required</sup> <a name="UseDefault" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.useDefault"></a>

```csharp
public bool|IResolvable UseDefault { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to use the default template or not. If 'true', 'include_claim_keys' must not be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_oidc_subject_claim_customization_template#use_default ActionsRepositoryOidcSubjectClaimCustomizationTemplate#use_default}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_oidc_subject_claim_customization_template#id ActionsRepositoryOidcSubjectClaimCustomizationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeClaimKeys`<sup>Optional</sup> <a name="IncludeClaimKeys" id="@cdktn/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.includeClaimKeys"></a>

```csharp
public string[] IncludeClaimKeys { get; set; }
```

- *Type:* string[]

A list of OpenID Connect claims.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_repository_oidc_subject_claim_customization_template#include_claim_keys ActionsRepositoryOidcSubjectClaimCustomizationTemplate#include_claim_keys}

---



