# `dataGithubReleaseAsset` Submodule <a name="`dataGithubReleaseAsset` Submodule" id="@cdktn/provider-github.dataGithubReleaseAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubReleaseAsset <a name="DataGithubReleaseAsset" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset github_release_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubReleaseAsset(Construct Scope, string Id, DataGithubReleaseAssetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig">DataGithubReleaseAssetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig">DataGithubReleaseAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetDownloadFileContents">ResetDownloadFileContents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDownloadFileContents` <a name="ResetDownloadFileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetDownloadFileContents"></a>

```csharp
private void ResetDownloadFileContents()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGithubReleaseAsset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubReleaseAsset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubReleaseAsset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubReleaseAsset.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubReleaseAsset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGithubReleaseAsset resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubReleaseAsset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubReleaseAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGithubReleaseAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.browserDownloadUrl">BrowserDownloadUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fileContents">FileContents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetIdInput">AssetIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContentsInput">DownloadFileContentsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetId">AssetId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContents">DownloadFileContents</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repository">Repository</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BrowserDownloadUrl`<sup>Required</sup> <a name="BrowserDownloadUrl" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.browserDownloadUrl"></a>

```csharp
public string BrowserDownloadUrl { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `FileContents`<sup>Required</sup> <a name="FileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fileContents"></a>

```csharp
public string FileContents { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `AssetIdInput`<sup>Optional</sup> <a name="AssetIdInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetIdInput"></a>

```csharp
public double AssetIdInput { get; }
```

- *Type:* double

---

##### `DownloadFileContentsInput`<sup>Optional</sup> <a name="DownloadFileContentsInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContentsInput"></a>

```csharp
public bool|IResolvable DownloadFileContentsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetId"></a>

```csharp
public double AssetId { get; }
```

- *Type:* double

---

##### `DownloadFileContents`<sup>Required</sup> <a name="DownloadFileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContents"></a>

```csharp
public bool|IResolvable DownloadFileContents { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubReleaseAssetConfig <a name="DataGithubReleaseAssetConfig" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubReleaseAssetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double AssetId,
    string Owner,
    string Repository,
    bool|IResolvable DownloadFileContents = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.assetId">AssetId</a></code> | <code>double</code> | ID of the release asset to retrieve. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.owner">Owner</a></code> | <code>string</code> | Owner of the repository. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.repository">Repository</a></code> | <code>string</code> | Name of the repository to retrieve the release asset from. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.downloadFileContents">DownloadFileContents</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to download the asset file content into the `file_contents` attribute. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.assetId"></a>

```csharp
public double AssetId { get; set; }
```

- *Type:* double

ID of the release asset to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#asset_id DataGithubReleaseAsset#asset_id}

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Owner of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#owner DataGithubReleaseAsset#owner}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Name of the repository to retrieve the release asset from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#repository DataGithubReleaseAsset#repository}

---

##### `DownloadFileContents`<sup>Optional</sup> <a name="DownloadFileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.downloadFileContents"></a>

```csharp
public bool|IResolvable DownloadFileContents { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to download the asset file content into the `file_contents` attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#download_file_contents DataGithubReleaseAsset#download_file_contents}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



