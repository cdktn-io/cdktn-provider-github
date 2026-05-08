# `dataGithubDependabotOrganizationSecrets` Submodule <a name="`dataGithubDependabotOrganizationSecrets` Submodule" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubDependabotOrganizationSecrets <a name="DataGithubDependabotOrganizationSecrets" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/dependabot_organization_secrets github_dependabot_organization_secrets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubDependabotOrganizationSecrets(Construct Scope, string Id, DataGithubDependabotOrganizationSecretsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig">DataGithubDependabotOrganizationSecretsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig">DataGithubDependabotOrganizationSecretsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGithubDependabotOrganizationSecrets resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubDependabotOrganizationSecrets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubDependabotOrganizationSecrets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubDependabotOrganizationSecrets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubDependabotOrganizationSecrets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGithubDependabotOrganizationSecrets resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubDependabotOrganizationSecrets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubDependabotOrganizationSecrets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/dependabot_organization_secrets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGithubDependabotOrganizationSecrets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.secrets">Secrets</a></code> | <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList">DataGithubDependabotOrganizationSecretsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.secrets"></a>

```csharp
public DataGithubDependabotOrganizationSecretsSecretsList Secrets { get; }
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList">DataGithubDependabotOrganizationSecretsSecretsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecrets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubDependabotOrganizationSecretsConfig <a name="DataGithubDependabotOrganizationSecretsConfig" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubDependabotOrganizationSecretsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/dependabot_organization_secrets#id DataGithubDependabotOrganizationSecrets#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/dependabot_organization_secrets#id DataGithubDependabotOrganizationSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubDependabotOrganizationSecretsSecrets <a name="DataGithubDependabotOrganizationSecretsSecrets" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecrets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubDependabotOrganizationSecretsSecrets {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubDependabotOrganizationSecretsSecretsList <a name="DataGithubDependabotOrganizationSecretsSecretsList" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubDependabotOrganizationSecretsSecretsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.get"></a>

```csharp
private DataGithubDependabotOrganizationSecretsSecretsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGithubDependabotOrganizationSecretsSecretsOutputReference <a name="DataGithubDependabotOrganizationSecretsSecretsOutputReference" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubDependabotOrganizationSecretsSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecrets">DataGithubDependabotOrganizationSecretsSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecretsOutputReference.property.internalValue"></a>

```csharp
public DataGithubDependabotOrganizationSecretsSecrets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubDependabotOrganizationSecrets.DataGithubDependabotOrganizationSecretsSecrets">DataGithubDependabotOrganizationSecretsSecrets</a>

---



