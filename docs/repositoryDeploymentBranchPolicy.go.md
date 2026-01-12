# `repositoryDeploymentBranchPolicy` Submodule <a name="`repositoryDeploymentBranchPolicy` Submodule" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryDeploymentBranchPolicy <a name="RepositoryDeploymentBranchPolicy" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/repository_deployment_branch_policy github_repository_deployment_branch_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/repositorydeploymentbranchpolicy"

repositorydeploymentbranchpolicy.NewRepositoryDeploymentBranchPolicy(scope Construct, id *string, config RepositoryDeploymentBranchPolicyConfig) RepositoryDeploymentBranchPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig">RepositoryDeploymentBranchPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig">RepositoryDeploymentBranchPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryDeploymentBranchPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/repositorydeploymentbranchpolicy"

repositorydeploymentbranchpolicy.RepositoryDeploymentBranchPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/repositorydeploymentbranchpolicy"

repositorydeploymentbranchpolicy.RepositoryDeploymentBranchPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/repositorydeploymentbranchpolicy"

repositorydeploymentbranchpolicy.RepositoryDeploymentBranchPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/repositorydeploymentbranchpolicy"

repositorydeploymentbranchpolicy.RepositoryDeploymentBranchPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RepositoryDeploymentBranchPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RepositoryDeploymentBranchPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RepositoryDeploymentBranchPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/repository_deployment_branch_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryDeploymentBranchPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.environmentNameInput">EnvironmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.environmentName">EnvironmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnvironmentNameInput`<sup>Optional</sup> <a name="EnvironmentNameInput" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.environmentNameInput"></a>

```go
func EnvironmentNameInput() *string
```

- *Type:* *string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `EnvironmentName`<sup>Required</sup> <a name="EnvironmentName" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.environmentName"></a>

```go
func EnvironmentName() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryDeploymentBranchPolicyConfig <a name="RepositoryDeploymentBranchPolicyConfig" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/repositorydeploymentbranchpolicy"

&repositorydeploymentbranchpolicy.RepositoryDeploymentBranchPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnvironmentName: *string,
	Name: *string,
	Repository: *string,
	Etag: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.environmentName">EnvironmentName</a></code> | <code>*string</code> | The target environment name. |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the branch. |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.repository">Repository</a></code> | <code>*string</code> | The GitHub repository name. |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.etag">Etag</a></code> | <code>*string</code> | An etag representing the Branch object. |
| <code><a href="#@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/repository_deployment_branch_policy#id RepositoryDeploymentBranchPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnvironmentName`<sup>Required</sup> <a name="EnvironmentName" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.environmentName"></a>

```go
EnvironmentName *string
```

- *Type:* *string

The target environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/repository_deployment_branch_policy#environment_name RepositoryDeploymentBranchPolicy#environment_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/repository_deployment_branch_policy#name RepositoryDeploymentBranchPolicy#name}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The GitHub repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/repository_deployment_branch_policy#repository RepositoryDeploymentBranchPolicy#repository}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

An etag representing the Branch object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/repository_deployment_branch_policy#etag RepositoryDeploymentBranchPolicy#etag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.repositoryDeploymentBranchPolicy.RepositoryDeploymentBranchPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/repository_deployment_branch_policy#id RepositoryDeploymentBranchPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



