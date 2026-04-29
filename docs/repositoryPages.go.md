# `repositoryPages` Submodule <a name="`repositoryPages` Submodule" id="@cdktn/provider-github.repositoryPages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryPagesA <a name="RepositoryPagesA" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages github_repository_pages}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/repositorypages"

repositorypages.NewRepositoryPagesA(scope Construct, id *string, config RepositoryPagesAConfig) RepositoryPagesA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig">RepositoryPagesAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig">RepositoryPagesAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetBuildType">ResetBuildType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetCname">ResetCname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetHttpsEnforced">ResetHttpsEnforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetPublic">ResetPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource"></a>

```go
func PutSource(value RepositoryPagesSourceA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

---

##### `ResetBuildType` <a name="ResetBuildType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetBuildType"></a>

```go
func ResetBuildType()
```

##### `ResetCname` <a name="ResetCname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetCname"></a>

```go
func ResetCname()
```

##### `ResetHttpsEnforced` <a name="ResetHttpsEnforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetHttpsEnforced"></a>

```go
func ResetHttpsEnforced()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetId"></a>

```go
func ResetId()
```

##### `ResetPublic` <a name="ResetPublic" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetPublic"></a>

```go
func ResetPublic()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.resetSource"></a>

```go
func ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RepositoryPagesA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/repositorypages"

repositorypages.RepositoryPagesA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/repositorypages"

repositorypages.RepositoryPagesA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/repositorypages"

repositorypages.RepositoryPagesA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/repositorypages"

repositorypages.RepositoryPagesA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RepositoryPagesA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RepositoryPagesA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RepositoryPagesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RepositoryPagesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildStatus">BuildStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.custom404">Custom404</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.htmlUrl">HtmlUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryId">RepositoryId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.source">Source</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference">RepositoryPagesSourceAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildTypeInput">BuildTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cnameInput">CnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforcedInput">HttpsEnforcedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.publicInput">PublicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildType">BuildType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cname">Cname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforced">HttpsEnforced</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.public">Public</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.apiUrl"></a>

```go
func ApiUrl() *string
```

- *Type:* *string

---

##### `BuildStatus`<sup>Required</sup> <a name="BuildStatus" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildStatus"></a>

```go
func BuildStatus() *string
```

- *Type:* *string

---

##### `Custom404`<sup>Required</sup> <a name="Custom404" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.custom404"></a>

```go
func Custom404() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.htmlUrl"></a>

```go
func HtmlUrl() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryId"></a>

```go
func RepositoryId() *f64
```

- *Type:* *f64

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.source"></a>

```go
func Source() RepositoryPagesSourceAOutputReference
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference">RepositoryPagesSourceAOutputReference</a>

---

##### `BuildTypeInput`<sup>Optional</sup> <a name="BuildTypeInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildTypeInput"></a>

```go
func BuildTypeInput() *string
```

- *Type:* *string

---

##### `CnameInput`<sup>Optional</sup> <a name="CnameInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cnameInput"></a>

```go
func CnameInput() *string
```

- *Type:* *string

---

##### `HttpsEnforcedInput`<sup>Optional</sup> <a name="HttpsEnforcedInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforcedInput"></a>

```go
func HttpsEnforcedInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PublicInput`<sup>Optional</sup> <a name="PublicInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.publicInput"></a>

```go
func PublicInput() interface{}
```

- *Type:* interface{}

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.sourceInput"></a>

```go
func SourceInput() RepositoryPagesSourceA
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

---

##### `BuildType`<sup>Required</sup> <a name="BuildType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.buildType"></a>

```go
func BuildType() *string
```

- *Type:* *string

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.cname"></a>

```go
func Cname() *string
```

- *Type:* *string

---

##### `HttpsEnforced`<sup>Required</sup> <a name="HttpsEnforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.httpsEnforced"></a>

```go
func HttpsEnforced() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Public`<sup>Required</sup> <a name="Public" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.public"></a>

```go
func Public() interface{}
```

- *Type:* interface{}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryPagesAConfig <a name="RepositoryPagesAConfig" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/repositorypages"

&repositorypages.RepositoryPagesAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Repository: *string,
	BuildType: *string,
	Cname: *string,
	HttpsEnforced: interface{},
	Id: *string,
	Public: interface{},
	Source: github.com/cdktn-io/cdktn-provider-github-go/github/v16.repositoryPages.RepositoryPagesSourceA,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.repository">Repository</a></code> | <code>*string</code> | The repository name to configure GitHub Pages for. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.buildType">BuildType</a></code> | <code>*string</code> | The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.cname">Cname</a></code> | <code>*string</code> | The custom domain for the repository. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.httpsEnforced">HttpsEnforced</a></code> | <code>interface{}</code> | Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#id RepositoryPagesA#id}. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.public">Public</a></code> | <code>interface{}</code> | Whether the GitHub Pages site is publicly visible. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | source block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The repository name to configure GitHub Pages for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#repository RepositoryPagesA#repository}

---

##### `BuildType`<sup>Optional</sup> <a name="BuildType" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.buildType"></a>

```go
BuildType *string
```

- *Type:* *string

The type of GitHub Pages site to build. Can be 'legacy' or 'workflow'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#build_type RepositoryPagesA#build_type}

---

##### `Cname`<sup>Optional</sup> <a name="Cname" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.cname"></a>

```go
Cname *string
```

- *Type:* *string

The custom domain for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#cname RepositoryPagesA#cname}

---

##### `HttpsEnforced`<sup>Optional</sup> <a name="HttpsEnforced" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.httpsEnforced"></a>

```go
HttpsEnforced interface{}
```

- *Type:* interface{}

Whether the rendered GitHub Pages site will only be served over HTTPS. Requires 'cname' to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#https_enforced RepositoryPagesA#https_enforced}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#id RepositoryPagesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Public`<sup>Optional</sup> <a name="Public" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.public"></a>

```go
Public interface{}
```

- *Type:* interface{}

Whether the GitHub Pages site is publicly visible.

If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#public RepositoryPagesA#public}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-github.repositoryPages.RepositoryPagesAConfig.property.source"></a>

```go
Source RepositoryPagesSourceA
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#source RepositoryPagesA#source}

---

### RepositoryPagesSourceA <a name="RepositoryPagesSourceA" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/repositorypages"

&repositorypages.RepositoryPagesSourceA {
	Branch: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.branch">Branch</a></code> | <code>*string</code> | The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages'). |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.path">Path</a></code> | <code>*string</code> | The repository directory from which the site publishes (Default: '/'). |

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#branch RepositoryPagesA#branch}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA.property.path"></a>

```go
Path *string
```

- *Type:* *string

The repository directory from which the site publishes (Default: '/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/repository_pages#path RepositoryPagesA#path}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryPagesSourceAOutputReference <a name="RepositoryPagesSourceAOutputReference" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/repositorypages"

repositorypages.NewRepositoryPagesSourceAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RepositoryPagesSourceAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.repositoryPages.RepositoryPagesSourceAOutputReference.property.internalValue"></a>

```go
func InternalValue() RepositoryPagesSourceA
```

- *Type:* <a href="#@cdktn/provider-github.repositoryPages.RepositoryPagesSourceA">RepositoryPagesSourceA</a>

---



