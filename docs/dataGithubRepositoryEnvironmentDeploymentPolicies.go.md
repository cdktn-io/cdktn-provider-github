# `dataGithubRepositoryEnvironmentDeploymentPolicies` Submodule <a name="`dataGithubRepositoryEnvironmentDeploymentPolicies` Submodule" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryEnvironmentDeploymentPolicies <a name="DataGithubRepositoryEnvironmentDeploymentPolicies" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/data-sources/repository_environment_deployment_policies github_repository_environment_deployment_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositoryenvironmentdeploymentpolicies"

datagithubrepositoryenvironmentdeploymentpolicies.NewDataGithubRepositoryEnvironmentDeploymentPolicies(scope Construct, id *string, config DataGithubRepositoryEnvironmentDeploymentPoliciesConfig) DataGithubRepositoryEnvironmentDeploymentPolicies
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig">DataGithubRepositoryEnvironmentDeploymentPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig">DataGithubRepositoryEnvironmentDeploymentPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubRepositoryEnvironmentDeploymentPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositoryenvironmentdeploymentpolicies"

datagithubrepositoryenvironmentdeploymentpolicies.DataGithubRepositoryEnvironmentDeploymentPolicies_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositoryenvironmentdeploymentpolicies"

datagithubrepositoryenvironmentdeploymentpolicies.DataGithubRepositoryEnvironmentDeploymentPolicies_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositoryenvironmentdeploymentpolicies"

datagithubrepositoryenvironmentdeploymentpolicies.DataGithubRepositoryEnvironmentDeploymentPolicies_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositoryenvironmentdeploymentpolicies"

datagithubrepositoryenvironmentdeploymentpolicies.DataGithubRepositoryEnvironmentDeploymentPolicies_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGithubRepositoryEnvironmentDeploymentPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGithubRepositoryEnvironmentDeploymentPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGithubRepositoryEnvironmentDeploymentPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/data-sources/repository_environment_deployment_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryEnvironmentDeploymentPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.policies">Policies</a></code> | <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList">DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.policies"></a>

```go
func Policies() DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList">DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryEnvironmentDeploymentPoliciesConfig <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesConfig" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositoryenvironmentdeploymentpolicies"

&datagithubrepositoryenvironmentdeploymentpolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig {
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
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.environment">Environment</a></code> | <code>*string</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.repository">Repository</a></code> | <code>*string</code> | The name of the GitHub repository. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/data-sources/repository_environment_deployment_policies#id DataGithubRepositoryEnvironmentDeploymentPolicies#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/data-sources/repository_environment_deployment_policies#environment DataGithubRepositoryEnvironmentDeploymentPolicies#environment}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The name of the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/data-sources/repository_environment_deployment_policies#repository DataGithubRepositoryEnvironmentDeploymentPolicies#repository}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/data-sources/repository_environment_deployment_policies#id DataGithubRepositoryEnvironmentDeploymentPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositoryenvironmentdeploymentpolicies"

&datagithubrepositoryenvironmentdeploymentpolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositoryenvironmentdeploymentpolicies"

datagithubrepositoryenvironmentdeploymentpolicies.NewDataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.get"></a>

```go
func Get(index *f64) DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/datagithubrepositoryenvironmentdeploymentpolicies"

datagithubrepositoryenvironmentdeploymentpolicies.NewDataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies">DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies">DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies</a>

---



