# `dataGithubReleaseAsset` Submodule <a name="`dataGithubReleaseAsset` Submodule" id="@cdktn/provider-github.dataGithubReleaseAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubReleaseAsset <a name="DataGithubReleaseAsset" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset github_release_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubreleaseasset"

datagithubreleaseasset.NewDataGithubReleaseAsset(scope Construct, id *string, config DataGithubReleaseAssetConfig) DataGithubReleaseAsset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig">DataGithubReleaseAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig">DataGithubReleaseAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDownloadFileContents` <a name="ResetDownloadFileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetDownloadFileContents"></a>

```go
func ResetDownloadFileContents()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubReleaseAsset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubreleaseasset"

datagithubreleaseasset.DataGithubReleaseAsset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubreleaseasset"

datagithubreleaseasset.DataGithubReleaseAsset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubreleaseasset"

datagithubreleaseasset.DataGithubReleaseAsset_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubreleaseasset"

datagithubreleaseasset.DataGithubReleaseAsset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGithubReleaseAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGithubReleaseAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGithubReleaseAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubReleaseAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.browserDownloadUrl">BrowserDownloadUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fileContents">FileContents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.nodeId">NodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetIdInput">AssetIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContentsInput">DownloadFileContentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetId">AssetId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContents">DownloadFileContents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BrowserDownloadUrl`<sup>Required</sup> <a name="BrowserDownloadUrl" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.browserDownloadUrl"></a>

```go
func BrowserDownloadUrl() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `FileContents`<sup>Required</sup> <a name="FileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.fileContents"></a>

```go
func FileContents() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.nodeId"></a>

```go
func NodeId() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `AssetIdInput`<sup>Optional</sup> <a name="AssetIdInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetIdInput"></a>

```go
func AssetIdInput() *f64
```

- *Type:* *f64

---

##### `DownloadFileContentsInput`<sup>Optional</sup> <a name="DownloadFileContentsInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContentsInput"></a>

```go
func DownloadFileContentsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.assetId"></a>

```go
func AssetId() *f64
```

- *Type:* *f64

---

##### `DownloadFileContents`<sup>Required</sup> <a name="DownloadFileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.downloadFileContents"></a>

```go
func DownloadFileContents() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAsset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubReleaseAssetConfig <a name="DataGithubReleaseAssetConfig" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubreleaseasset"

&datagithubreleaseasset.DataGithubReleaseAssetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssetId: *f64,
	Owner: *string,
	Repository: *string,
	DownloadFileContents: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.assetId">AssetId</a></code> | <code>*f64</code> | ID of the release asset to retrieve. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.owner">Owner</a></code> | <code>*string</code> | Owner of the repository. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.repository">Repository</a></code> | <code>*string</code> | Name of the repository to retrieve the release asset from. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.downloadFileContents">DownloadFileContents</a></code> | <code>interface{}</code> | Whether to download the asset file content into the `file_contents` attribute. |
| <code><a href="#@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.assetId"></a>

```go
AssetId *f64
```

- *Type:* *f64

ID of the release asset to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset#asset_id DataGithubReleaseAsset#asset_id}

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Owner of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset#owner DataGithubReleaseAsset#owner}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Name of the repository to retrieve the release asset from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset#repository DataGithubReleaseAsset#repository}

---

##### `DownloadFileContents`<sup>Optional</sup> <a name="DownloadFileContents" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.downloadFileContents"></a>

```go
DownloadFileContents interface{}
```

- *Type:* interface{}

Whether to download the asset file content into the `file_contents` attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset#download_file_contents DataGithubReleaseAsset#download_file_contents}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.dataGithubReleaseAsset.DataGithubReleaseAssetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/release_asset#id DataGithubReleaseAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



