# `repositoryAutolinkReference` Submodule <a name="`repositoryAutolinkReference` Submodule" id="@cdktn/provider-github.repositoryAutolinkReference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryAutolinkReference <a name="RepositoryAutolinkReference" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/repository_autolink_reference github_repository_autolink_reference}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/repositoryautolinkreference"

repositoryautolinkreference.NewRepositoryAutolinkReference(scope Construct, id *string, config RepositoryAutolinkReferenceConfig) RepositoryAutolinkReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig">RepositoryAutolinkReferenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig">RepositoryAutolinkReferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetIsAlphanumeric">ResetIsAlphanumeric</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIsAlphanumeric` <a name="ResetIsAlphanumeric" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetIsAlphanumeric"></a>

```go
func ResetIsAlphanumeric()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryAutolinkReference resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/repositoryautolinkreference"

repositoryautolinkreference.RepositoryAutolinkReference_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/repositoryautolinkreference"

repositoryautolinkreference.RepositoryAutolinkReference_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/repositoryautolinkreference"

repositoryautolinkreference.RepositoryAutolinkReference_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/repositoryautolinkreference"

repositoryautolinkreference.RepositoryAutolinkReference_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RepositoryAutolinkReference resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RepositoryAutolinkReference to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RepositoryAutolinkReference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/repository_autolink_reference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryAutolinkReference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumericInput">IsAlphanumericInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefixInput">KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplateInput">TargetUrlTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumeric">IsAlphanumeric</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplate">TargetUrlTemplate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsAlphanumericInput`<sup>Optional</sup> <a name="IsAlphanumericInput" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumericInput"></a>

```go
func IsAlphanumericInput() interface{}
```

- *Type:* interface{}

---

##### `KeyPrefixInput`<sup>Optional</sup> <a name="KeyPrefixInput" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefixInput"></a>

```go
func KeyPrefixInput() *string
```

- *Type:* *string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `TargetUrlTemplateInput`<sup>Optional</sup> <a name="TargetUrlTemplateInput" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplateInput"></a>

```go
func TargetUrlTemplateInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAlphanumeric`<sup>Required</sup> <a name="IsAlphanumeric" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumeric"></a>

```go
func IsAlphanumeric() interface{}
```

- *Type:* interface{}

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefix"></a>

```go
func KeyPrefix() *string
```

- *Type:* *string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

##### `TargetUrlTemplate`<sup>Required</sup> <a name="TargetUrlTemplate" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplate"></a>

```go
func TargetUrlTemplate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryAutolinkReferenceConfig <a name="RepositoryAutolinkReferenceConfig" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/repositoryautolinkreference"

&repositoryautolinkreference.RepositoryAutolinkReferenceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyPrefix: *string,
	Repository: *string,
	TargetUrlTemplate: *string,
	Id: *string,
	IsAlphanumeric: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | This prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.repository">Repository</a></code> | <code>*string</code> | The repository name. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.targetUrlTemplate">TargetUrlTemplate</a></code> | <code>*string</code> | The template of the target URL used for the links; |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/repository_autolink_reference#id RepositoryAutolinkReference#id}. |
| <code><a href="#@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.isAlphanumeric">IsAlphanumeric</a></code> | <code>interface{}</code> | Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.keyPrefix"></a>

```go
KeyPrefix *string
```

- *Type:* *string

This prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/repository_autolink_reference#key_prefix RepositoryAutolinkReference#key_prefix}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/repository_autolink_reference#repository RepositoryAutolinkReference#repository}

---

##### `TargetUrlTemplate`<sup>Required</sup> <a name="TargetUrlTemplate" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.targetUrlTemplate"></a>

```go
TargetUrlTemplate *string
```

- *Type:* *string

The template of the target URL used for the links;

must be a valid URL and contain `<num>` for the reference number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/repository_autolink_reference#target_url_template RepositoryAutolinkReference#target_url_template}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/repository_autolink_reference#id RepositoryAutolinkReference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAlphanumeric`<sup>Optional</sup> <a name="IsAlphanumeric" id="@cdktn/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.isAlphanumeric"></a>

```go
IsAlphanumeric interface{}
```

- *Type:* interface{}

Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.11.0/docs/resources/repository_autolink_reference#is_alphanumeric RepositoryAutolinkReference#is_alphanumeric}

---



