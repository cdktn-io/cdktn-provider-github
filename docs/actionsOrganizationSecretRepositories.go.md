# `actionsOrganizationSecretRepositories` Submodule <a name="`actionsOrganizationSecretRepositories` Submodule" id="@cdktn/provider-github.actionsOrganizationSecretRepositories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationSecretRepositories <a name="ActionsOrganizationSecretRepositories" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_organization_secret_repositories github_actions_organization_secret_repositories}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsorganizationsecretrepositories"

actionsorganizationsecretrepositories.NewActionsOrganizationSecretRepositories(scope Construct, id *string, config ActionsOrganizationSecretRepositoriesConfig) ActionsOrganizationSecretRepositories
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig">ActionsOrganizationSecretRepositoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig">ActionsOrganizationSecretRepositoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsOrganizationSecretRepositories resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsorganizationsecretrepositories"

actionsorganizationsecretrepositories.ActionsOrganizationSecretRepositories_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsorganizationsecretrepositories"

actionsorganizationsecretrepositories.ActionsOrganizationSecretRepositories_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsorganizationsecretrepositories"

actionsorganizationsecretrepositories.ActionsOrganizationSecretRepositories_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsorganizationsecretrepositories"

actionsorganizationsecretrepositories.ActionsOrganizationSecretRepositories_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ActionsOrganizationSecretRepositories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ActionsOrganizationSecretRepositories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ActionsOrganizationSecretRepositories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_organization_secret_repositories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ActionsOrganizationSecretRepositories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.selectedRepositoryIdsInput">SelectedRepositoryIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>*[]*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `SelectedRepositoryIdsInput`<sup>Optional</sup> <a name="SelectedRepositoryIdsInput" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.selectedRepositoryIdsInput"></a>

```go
func SelectedRepositoryIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.selectedRepositoryIds"></a>

```go
func SelectedRepositoryIds() *[]*f64
```

- *Type:* *[]*f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositories.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationSecretRepositoriesConfig <a name="ActionsOrganizationSecretRepositoriesConfig" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsorganizationsecretrepositories"

&actionsorganizationsecretrepositories.ActionsOrganizationSecretRepositoriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecretName: *string,
	SelectedRepositoryIds: *[]*f64,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.secretName">SecretName</a></code> | <code>*string</code> | Name of the existing secret. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>*[]*f64</code> | An array of repository ids that can access the organization secret. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_organization_secret_repositories#id ActionsOrganizationSecretRepositories#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Name of the existing secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_organization_secret_repositories#secret_name ActionsOrganizationSecretRepositories#secret_name}

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.selectedRepositoryIds"></a>

```go
SelectedRepositoryIds *[]*f64
```

- *Type:* *[]*f64

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_organization_secret_repositories#selected_repository_ids ActionsOrganizationSecretRepositories#selected_repository_ids}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationSecretRepositories.ActionsOrganizationSecretRepositoriesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_organization_secret_repositories#id ActionsOrganizationSecretRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



