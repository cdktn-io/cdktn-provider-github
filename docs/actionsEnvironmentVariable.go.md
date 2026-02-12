# `actionsEnvironmentVariable` Submodule <a name="`actionsEnvironmentVariable` Submodule" id="@cdktn/provider-github.actionsEnvironmentVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsEnvironmentVariable <a name="ActionsEnvironmentVariable" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_environment_variable github_actions_environment_variable}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsenvironmentvariable"

actionsenvironmentvariable.NewActionsEnvironmentVariable(scope Construct, id *string, config ActionsEnvironmentVariableConfig) ActionsEnvironmentVariable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig">ActionsEnvironmentVariableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig">ActionsEnvironmentVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsEnvironmentVariable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsenvironmentvariable"

actionsenvironmentvariable.ActionsEnvironmentVariable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsenvironmentvariable"

actionsenvironmentvariable.ActionsEnvironmentVariable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsenvironmentvariable"

actionsenvironmentvariable.ActionsEnvironmentVariable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsenvironmentvariable"

actionsenvironmentvariable.ActionsEnvironmentVariable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ActionsEnvironmentVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ActionsEnvironmentVariable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ActionsEnvironmentVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_environment_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ActionsEnvironmentVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.repositoryId">RepositoryId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.variableNameInput">VariableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.variableName">VariableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.repositoryId"></a>

```go
func RepositoryId() *f64
```

- *Type:* *f64

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `VariableNameInput`<sup>Optional</sup> <a name="VariableNameInput" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.variableNameInput"></a>

```go
func VariableNameInput() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.variableName"></a>

```go
func VariableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsEnvironmentVariableConfig <a name="ActionsEnvironmentVariableConfig" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/actionsenvironmentvariable"

&actionsenvironmentvariable.ActionsEnvironmentVariableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Environment: *string,
	Repository: *string,
	Value: *string,
	VariableName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.environment">Environment</a></code> | <code>*string</code> | Name of the environment. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.repository">Repository</a></code> | <code>*string</code> | Name of the repository. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.value">Value</a></code> | <code>*string</code> | Value of the variable. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.variableName">VariableName</a></code> | <code>*string</code> | Name of the variable. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_environment_variable#id ActionsEnvironmentVariable#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_environment_variable#environment ActionsEnvironmentVariable#environment}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

Name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_environment_variable#repository ActionsEnvironmentVariable#repository}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_environment_variable#value ActionsEnvironmentVariable#value}

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.variableName"></a>

```go
VariableName *string
```

- *Type:* *string

Name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_environment_variable#variable_name ActionsEnvironmentVariable#variable_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.actionsEnvironmentVariable.ActionsEnvironmentVariableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.1/docs/resources/actions_environment_variable#id ActionsEnvironmentVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



