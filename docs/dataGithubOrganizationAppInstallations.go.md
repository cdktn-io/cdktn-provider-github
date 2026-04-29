# `dataGithubOrganizationAppInstallations` Submodule <a name="`dataGithubOrganizationAppInstallations` Submodule" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationAppInstallations <a name="DataGithubOrganizationAppInstallations" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_app_installations github_organization_app_installations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/datagithuborganizationappinstallations"

datagithuborganizationappinstallations.NewDataGithubOrganizationAppInstallations(scope Construct, id *string, config DataGithubOrganizationAppInstallationsConfig) DataGithubOrganizationAppInstallations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig">DataGithubOrganizationAppInstallationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig">DataGithubOrganizationAppInstallationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGithubOrganizationAppInstallations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/datagithuborganizationappinstallations"

datagithuborganizationappinstallations.DataGithubOrganizationAppInstallations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/datagithuborganizationappinstallations"

datagithuborganizationappinstallations.DataGithubOrganizationAppInstallations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/datagithuborganizationappinstallations"

datagithuborganizationappinstallations.DataGithubOrganizationAppInstallations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/datagithuborganizationappinstallations"

datagithuborganizationappinstallations.DataGithubOrganizationAppInstallations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGithubOrganizationAppInstallations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGithubOrganizationAppInstallations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGithubOrganizationAppInstallations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_app_installations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGithubOrganizationAppInstallations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.installations">Installations</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList">DataGithubOrganizationAppInstallationsInstallationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Installations`<sup>Required</sup> <a name="Installations" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.installations"></a>

```go
func Installations() DataGithubOrganizationAppInstallationsInstallationsList
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList">DataGithubOrganizationAppInstallationsInstallationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationAppInstallationsConfig <a name="DataGithubOrganizationAppInstallationsConfig" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/datagithuborganizationappinstallations"

&datagithuborganizationappinstallations.DataGithubOrganizationAppInstallationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_app_installations#id DataGithubOrganizationAppInstallations#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/organization_app_installations#id DataGithubOrganizationAppInstallations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubOrganizationAppInstallationsInstallations <a name="DataGithubOrganizationAppInstallationsInstallations" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/datagithuborganizationappinstallations"

&datagithuborganizationappinstallations.DataGithubOrganizationAppInstallationsInstallations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubOrganizationAppInstallationsInstallationsList <a name="DataGithubOrganizationAppInstallationsInstallationsList" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/datagithuborganizationappinstallations"

datagithuborganizationappinstallations.NewDataGithubOrganizationAppInstallationsInstallationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGithubOrganizationAppInstallationsInstallationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.get"></a>

```go
func Get(index *f64) DataGithubOrganizationAppInstallationsInstallationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGithubOrganizationAppInstallationsInstallationsOutputReference <a name="DataGithubOrganizationAppInstallationsInstallationsOutputReference" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v16/datagithuborganizationappinstallations"

datagithuborganizationappinstallations.NewDataGithubOrganizationAppInstallationsInstallationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGithubOrganizationAppInstallationsInstallationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.appId">AppId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.appSlug">AppSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.events">Events</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.permissions">Permissions</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.repositorySelection">RepositorySelection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.singleFilePaths">SingleFilePaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.suspended">Suspended</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.targetId">TargetId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallations">DataGithubOrganizationAppInstallationsInstallations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.appId"></a>

```go
func AppId() *f64
```

- *Type:* *f64

---

##### `AppSlug`<sup>Required</sup> <a name="AppSlug" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.appSlug"></a>

```go
func AppSlug() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.events"></a>

```go
func Events() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.permissions"></a>

```go
func Permissions() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `RepositorySelection`<sup>Required</sup> <a name="RepositorySelection" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.repositorySelection"></a>

```go
func RepositorySelection() *string
```

- *Type:* *string

---

##### `SingleFilePaths`<sup>Required</sup> <a name="SingleFilePaths" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.singleFilePaths"></a>

```go
func SingleFilePaths() *[]*string
```

- *Type:* *[]*string

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.suspended"></a>

```go
func Suspended() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.targetId"></a>

```go
func TargetId() *f64
```

- *Type:* *f64

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGithubOrganizationAppInstallationsInstallations
```

- *Type:* <a href="#@cdktn/provider-github.dataGithubOrganizationAppInstallations.DataGithubOrganizationAppInstallationsInstallations">DataGithubOrganizationAppInstallationsInstallations</a>

---



