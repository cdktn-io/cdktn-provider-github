# `actionsOrganizationWorkflowPermissions` Submodule <a name="`actionsOrganizationWorkflowPermissions` Submodule" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationWorkflowPermissions <a name="ActionsOrganizationWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_workflow_permissions github_actions_organization_workflow_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsorganizationworkflowpermissions"

actionsorganizationworkflowpermissions.NewActionsOrganizationWorkflowPermissions(scope Construct, id *string, config ActionsOrganizationWorkflowPermissionsConfig) ActionsOrganizationWorkflowPermissions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig">ActionsOrganizationWorkflowPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig">ActionsOrganizationWorkflowPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetCanApprovePullRequestReviews">ResetCanApprovePullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetDefaultWorkflowPermissions">ResetDefaultWorkflowPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCanApprovePullRequestReviews` <a name="ResetCanApprovePullRequestReviews" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetCanApprovePullRequestReviews"></a>

```go
func ResetCanApprovePullRequestReviews()
```

##### `ResetDefaultWorkflowPermissions` <a name="ResetDefaultWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetDefaultWorkflowPermissions"></a>

```go
func ResetDefaultWorkflowPermissions()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsOrganizationWorkflowPermissions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsorganizationworkflowpermissions"

actionsorganizationworkflowpermissions.ActionsOrganizationWorkflowPermissions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsorganizationworkflowpermissions"

actionsorganizationworkflowpermissions.ActionsOrganizationWorkflowPermissions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsorganizationworkflowpermissions"

actionsorganizationworkflowpermissions.ActionsOrganizationWorkflowPermissions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsorganizationworkflowpermissions"

actionsorganizationworkflowpermissions.ActionsOrganizationWorkflowPermissions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ActionsOrganizationWorkflowPermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ActionsOrganizationWorkflowPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ActionsOrganizationWorkflowPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_workflow_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ActionsOrganizationWorkflowPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviewsInput">CanApprovePullRequestReviewsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissionsInput">DefaultWorkflowPermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlugInput">OrganizationSlugInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviews">CanApprovePullRequestReviews</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissions">DefaultWorkflowPermissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlug">OrganizationSlug</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CanApprovePullRequestReviewsInput`<sup>Optional</sup> <a name="CanApprovePullRequestReviewsInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviewsInput"></a>

```go
func CanApprovePullRequestReviewsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultWorkflowPermissionsInput`<sup>Optional</sup> <a name="DefaultWorkflowPermissionsInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissionsInput"></a>

```go
func DefaultWorkflowPermissionsInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationSlugInput`<sup>Optional</sup> <a name="OrganizationSlugInput" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlugInput"></a>

```go
func OrganizationSlugInput() *string
```

- *Type:* *string

---

##### `CanApprovePullRequestReviews`<sup>Required</sup> <a name="CanApprovePullRequestReviews" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.canApprovePullRequestReviews"></a>

```go
func CanApprovePullRequestReviews() interface{}
```

- *Type:* interface{}

---

##### `DefaultWorkflowPermissions`<sup>Required</sup> <a name="DefaultWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.defaultWorkflowPermissions"></a>

```go
func DefaultWorkflowPermissions() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrganizationSlug`<sup>Required</sup> <a name="OrganizationSlug" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.organizationSlug"></a>

```go
func OrganizationSlug() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationWorkflowPermissionsConfig <a name="ActionsOrganizationWorkflowPermissionsConfig" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsorganizationworkflowpermissions"

&actionsorganizationworkflowpermissions.ActionsOrganizationWorkflowPermissionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OrganizationSlug: *string,
	CanApprovePullRequestReviews: interface{},
	DefaultWorkflowPermissions: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.organizationSlug">OrganizationSlug</a></code> | <code>*string</code> | The slug of the Organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.canApprovePullRequestReviews">CanApprovePullRequestReviews</a></code> | <code>interface{}</code> | Whether GitHub Actions can approve pull request reviews in any repository in the organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.defaultWorkflowPermissions">DefaultWorkflowPermissions</a></code> | <code>*string</code> | The default workflow permissions granted to the GITHUB_TOKEN when running workflows in any repository in the organization. |
| <code><a href="#@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_workflow_permissions#id ActionsOrganizationWorkflowPermissions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OrganizationSlug`<sup>Required</sup> <a name="OrganizationSlug" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.organizationSlug"></a>

```go
OrganizationSlug *string
```

- *Type:* *string

The slug of the Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_workflow_permissions#organization_slug ActionsOrganizationWorkflowPermissions#organization_slug}

---

##### `CanApprovePullRequestReviews`<sup>Optional</sup> <a name="CanApprovePullRequestReviews" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.canApprovePullRequestReviews"></a>

```go
CanApprovePullRequestReviews interface{}
```

- *Type:* interface{}

Whether GitHub Actions can approve pull request reviews in any repository in the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_workflow_permissions#can_approve_pull_request_reviews ActionsOrganizationWorkflowPermissions#can_approve_pull_request_reviews}

---

##### `DefaultWorkflowPermissions`<sup>Optional</sup> <a name="DefaultWorkflowPermissions" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.defaultWorkflowPermissions"></a>

```go
DefaultWorkflowPermissions *string
```

- *Type:* *string

The default workflow permissions granted to the GITHUB_TOKEN when running workflows in any repository in the organization.

Can be 'read' or 'write'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_workflow_permissions#default_workflow_permissions ActionsOrganizationWorkflowPermissions#default_workflow_permissions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.actionsOrganizationWorkflowPermissions.ActionsOrganizationWorkflowPermissionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/actions_organization_workflow_permissions#id ActionsOrganizationWorkflowPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



