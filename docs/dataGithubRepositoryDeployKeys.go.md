# `dataGithubRepositoryDeployKeys` Submodule <a name="`dataGithubRepositoryDeployKeys` Submodule" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryDeployKeys <a name="DataGithubRepositoryDeployKeys" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/repository_deploy_keys github_repository_deploy_keys}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositorydeploykeys"

datagithubrepositorydeploykeys.NewDataGithubRepositoryDeployKeys(scope Construct, id *string, config DataGithubRepositoryDeployKeysConfig) DataGithubRepositoryDeployKeys
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig">DataGithubRepositoryDeployKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig">DataGithubRepositoryDeployKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubRepositoryDeployKeys resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositorydeploykeys"

datagithubrepositorydeploykeys.DataGithubRepositoryDeployKeys_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositorydeploykeys"

datagithubrepositorydeploykeys.DataGithubRepositoryDeployKeys_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositorydeploykeys"

datagithubrepositorydeploykeys.DataGithubRepositoryDeployKeys_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositorydeploykeys"

datagithubrepositorydeploykeys.DataGithubRepositoryDeployKeys_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGithubRepositoryDeployKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGithubRepositoryDeployKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGithubRepositoryDeployKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/repository_deploy_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryDeployKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.keys">Keys</a></code> | <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList">DataGithubRepositoryDeployKeysKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.keys"></a>

```go
func Keys() DataGithubRepositoryDeployKeysKeysList
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList">DataGithubRepositoryDeployKeysKeysList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryDeployKeysConfig <a name="DataGithubRepositoryDeployKeysConfig" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositorydeploykeys"

&datagithubrepositorydeploykeys.DataGithubRepositoryDeployKeysConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Repository: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.repository">Repository</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/repository_deploy_keys#repository DataGithubRepositoryDeployKeys#repository}. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/repository_deploy_keys#id DataGithubRepositoryDeployKeys#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/repository_deploy_keys#repository DataGithubRepositoryDeployKeys#repository}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/data-sources/repository_deploy_keys#id DataGithubRepositoryDeployKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubRepositoryDeployKeysKeys <a name="DataGithubRepositoryDeployKeysKeys" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeys.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositorydeploykeys"

&datagithubrepositorydeploykeys.DataGithubRepositoryDeployKeysKeys {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryDeployKeysKeysList <a name="DataGithubRepositoryDeployKeysKeysList" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositorydeploykeys"

datagithubrepositorydeploykeys.NewDataGithubRepositoryDeployKeysKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGithubRepositoryDeployKeysKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.get"></a>

```go
func Get(index *f64) DataGithubRepositoryDeployKeysKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGithubRepositoryDeployKeysKeysOutputReference <a name="DataGithubRepositoryDeployKeysKeysOutputReference" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositorydeploykeys"

datagithubrepositorydeploykeys.NewDataGithubRepositoryDeployKeysKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGithubRepositoryDeployKeysKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.verified">Verified</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeys">DataGithubRepositoryDeployKeysKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Verified`<sup>Required</sup> <a name="Verified" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.verified"></a>

```go
func Verified() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGithubRepositoryDeployKeysKeys
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeys">DataGithubRepositoryDeployKeysKeys</a>

---



