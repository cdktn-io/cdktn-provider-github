# `dataGithubOrganizationCustomProperties` Submodule <a name="`dataGithubOrganizationCustomProperties` Submodule" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationCustomProperties <a name="DataGithubOrganizationCustomProperties" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties github_organization_custom_properties}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubOrganizationCustomProperties(Construct Scope, string Id, DataGithubOrganizationCustomPropertiesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig">DataGithubOrganizationCustomPropertiesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig">DataGithubOrganizationCustomPropertiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetAllowedValues">ResetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetValuesEditableBy">ResetValuesEditableBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAllowedValues` <a name="ResetAllowedValues" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetAllowedValues"></a>

```csharp
private void ResetAllowedValues()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetValuesEditableBy` <a name="ResetValuesEditableBy" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetValuesEditableBy"></a>

```csharp
private void ResetValuesEditableBy()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetValueType"></a>

```csharp
private void ResetValueType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGithubOrganizationCustomProperties resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganizationCustomProperties.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganizationCustomProperties.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganizationCustomProperties.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubOrganizationCustomProperties.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGithubOrganizationCustomProperties resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubOrganizationCustomProperties to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubOrganizationCustomProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGithubOrganizationCustomProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.allowedValuesInput">AllowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.defaultValueInput">DefaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.propertyNameInput">PropertyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.requiredInput">RequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valuesEditableByInput">ValuesEditableByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.propertyName">PropertyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valuesEditableBy">ValuesEditableBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllowedValuesInput`<sup>Optional</sup> <a name="AllowedValuesInput" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.allowedValuesInput"></a>

```csharp
public string[] AllowedValuesInput { get; }
```

- *Type:* string[]

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.defaultValueInput"></a>

```csharp
public string DefaultValueInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PropertyNameInput`<sup>Optional</sup> <a name="PropertyNameInput" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.propertyNameInput"></a>

```csharp
public string PropertyNameInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.requiredInput"></a>

```csharp
public bool|IResolvable RequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValuesEditableByInput`<sup>Optional</sup> <a name="ValuesEditableByInput" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valuesEditableByInput"></a>

```csharp
public string ValuesEditableByInput { get; }
```

- *Type:* string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; }
```

- *Type:* string[]

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PropertyName`<sup>Required</sup> <a name="PropertyName" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.propertyName"></a>

```csharp
public string PropertyName { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.required"></a>

```csharp
public bool|IResolvable Required { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValuesEditableBy`<sup>Required</sup> <a name="ValuesEditableBy" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valuesEditableBy"></a>

```csharp
public string ValuesEditableBy { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationCustomPropertiesConfig <a name="DataGithubOrganizationCustomPropertiesConfig" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubOrganizationCustomPropertiesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PropertyName,
    string[] AllowedValues = null,
    string DefaultValue = null,
    string Description = null,
    string Id = null,
    bool|IResolvable Required = null,
    string ValuesEditableBy = null,
    string ValueType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.propertyName">PropertyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#property_name DataGithubOrganizationCustomProperties#property_name}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#allowed_values DataGithubOrganizationCustomProperties#allowed_values}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.defaultValue">DefaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#default_value DataGithubOrganizationCustomProperties#default_value}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#description DataGithubOrganizationCustomProperties#description}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#id DataGithubOrganizationCustomProperties#id}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#required DataGithubOrganizationCustomProperties#required}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.valuesEditableBy">ValuesEditableBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#values_editable_by DataGithubOrganizationCustomProperties#values_editable_by}. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.valueType">ValueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#value_type DataGithubOrganizationCustomProperties#value_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PropertyName`<sup>Required</sup> <a name="PropertyName" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.propertyName"></a>

```csharp
public string PropertyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#property_name DataGithubOrganizationCustomProperties#property_name}.

---

##### `AllowedValues`<sup>Optional</sup> <a name="AllowedValues" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#allowed_values DataGithubOrganizationCustomProperties#allowed_values}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.defaultValue"></a>

```csharp
public string DefaultValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#default_value DataGithubOrganizationCustomProperties#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#description DataGithubOrganizationCustomProperties#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#id DataGithubOrganizationCustomProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.required"></a>

```csharp
public bool|IResolvable Required { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#required DataGithubOrganizationCustomProperties#required}.

---

##### `ValuesEditableBy`<sup>Optional</sup> <a name="ValuesEditableBy" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.valuesEditableBy"></a>

```csharp
public string ValuesEditableBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#values_editable_by DataGithubOrganizationCustomProperties#values_editable_by}.

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktn/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_custom_properties#value_type DataGithubOrganizationCustomProperties#value_type}.

---



