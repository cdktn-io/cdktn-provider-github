# `dataGithubActionsEnvironmentPublicKey` Submodule <a name="`dataGithubActionsEnvironmentPublicKey` Submodule" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubActionsEnvironmentPublicKey <a name="DataGithubActionsEnvironmentPublicKey" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/data-sources/actions_environment_public_key github_actions_environment_public_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubactionsenvironmentpublickey"

datagithubactionsenvironmentpublickey.NewDataGithubActionsEnvironmentPublicKey(scope Construct, id *string, config DataGithubActionsEnvironmentPublicKeyConfig) DataGithubActionsEnvironmentPublicKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig">DataGithubActionsEnvironmentPublicKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig">DataGithubActionsEnvironmentPublicKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubActionsEnvironmentPublicKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubactionsenvironmentpublickey"

datagithubactionsenvironmentpublickey.DataGithubActionsEnvironmentPublicKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubactionsenvironmentpublickey"

datagithubactionsenvironmentpublickey.DataGithubActionsEnvironmentPublicKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubactionsenvironmentpublickey"

datagithubactionsenvironmentpublickey.DataGithubActionsEnvironmentPublicKey_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubactionsenvironmentpublickey"

datagithubactionsenvironmentpublickey.DataGithubActionsEnvironmentPublicKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGithubActionsEnvironmentPublicKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGithubActionsEnvironmentPublicKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGithubActionsEnvironmentPublicKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/data-sources/actions_environment_public_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubActionsEnvironmentPublicKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubActionsEnvironmentPublicKeyConfig <a name="DataGithubActionsEnvironmentPublicKeyConfig" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubactionsenvironmentpublickey"

&datagithubactionsenvironmentpublickey.DataGithubActionsEnvironmentPublicKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Environment: *string,
	Repository: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.environment">Environment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/data-sources/actions_environment_public_key#environment DataGithubActionsEnvironmentPublicKey#environment}. |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.repository">Repository</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/data-sources/actions_environment_public_key#repository DataGithubActionsEnvironmentPublicKey#repository}. |
| <code><a href="#@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/data-sources/actions_environment_public_key#id DataGithubActionsEnvironmentPublicKey#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/data-sources/actions_environment_public_key#environment DataGithubActionsEnvironmentPublicKey#environment}.

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/data-sources/actions_environment_public_key#repository DataGithubActionsEnvironmentPublicKey#repository}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.dataGithubActionsEnvironmentPublicKey.DataGithubActionsEnvironmentPublicKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/data-sources/actions_environment_public_key#id DataGithubActionsEnvironmentPublicKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



