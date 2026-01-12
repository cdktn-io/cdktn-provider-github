# `enterpriseSecurityAnalysisSettings` Submodule <a name="`enterpriseSecurityAnalysisSettings` Submodule" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseSecurityAnalysisSettings <a name="EnterpriseSecurityAnalysisSettings" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/enterprise_security_analysis_settings github_enterprise_security_analysis_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/enterprisesecurityanalysissettings"

enterprisesecurityanalysissettings.NewEnterpriseSecurityAnalysisSettings(scope Construct, id *string, config EnterpriseSecurityAnalysisSettingsConfig) EnterpriseSecurityAnalysisSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig">EnterpriseSecurityAnalysisSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig">EnterpriseSecurityAnalysisSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetAdvancedSecurityEnabledForNewRepositories">ResetAdvancedSecurityEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningEnabledForNewRepositories">ResetSecretScanningEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningPushProtectionCustomLink">ResetSecretScanningPushProtectionCustomLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningPushProtectionEnabledForNewRepositories">ResetSecretScanningPushProtectionEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningValidityChecksEnabled">ResetSecretScanningValidityChecksEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAdvancedSecurityEnabledForNewRepositories` <a name="ResetAdvancedSecurityEnabledForNewRepositories" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetAdvancedSecurityEnabledForNewRepositories"></a>

```go
func ResetAdvancedSecurityEnabledForNewRepositories()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetSecretScanningEnabledForNewRepositories` <a name="ResetSecretScanningEnabledForNewRepositories" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningEnabledForNewRepositories"></a>

```go
func ResetSecretScanningEnabledForNewRepositories()
```

##### `ResetSecretScanningPushProtectionCustomLink` <a name="ResetSecretScanningPushProtectionCustomLink" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningPushProtectionCustomLink"></a>

```go
func ResetSecretScanningPushProtectionCustomLink()
```

##### `ResetSecretScanningPushProtectionEnabledForNewRepositories` <a name="ResetSecretScanningPushProtectionEnabledForNewRepositories" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningPushProtectionEnabledForNewRepositories"></a>

```go
func ResetSecretScanningPushProtectionEnabledForNewRepositories()
```

##### `ResetSecretScanningValidityChecksEnabled` <a name="ResetSecretScanningValidityChecksEnabled" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningValidityChecksEnabled"></a>

```go
func ResetSecretScanningValidityChecksEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseSecurityAnalysisSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/enterprisesecurityanalysissettings"

enterprisesecurityanalysissettings.EnterpriseSecurityAnalysisSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/enterprisesecurityanalysissettings"

enterprisesecurityanalysissettings.EnterpriseSecurityAnalysisSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/enterprisesecurityanalysissettings"

enterprisesecurityanalysissettings.EnterpriseSecurityAnalysisSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/enterprisesecurityanalysissettings"

enterprisesecurityanalysissettings.EnterpriseSecurityAnalysisSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EnterpriseSecurityAnalysisSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EnterpriseSecurityAnalysisSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EnterpriseSecurityAnalysisSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/enterprise_security_analysis_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseSecurityAnalysisSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.advancedSecurityEnabledForNewRepositoriesInput">AdvancedSecurityEnabledForNewRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.enterpriseSlugInput">EnterpriseSlugInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningEnabledForNewRepositoriesInput">SecretScanningEnabledForNewRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionCustomLinkInput">SecretScanningPushProtectionCustomLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput">SecretScanningPushProtectionEnabledForNewRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningValidityChecksEnabledInput">SecretScanningValidityChecksEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.advancedSecurityEnabledForNewRepositories">AdvancedSecurityEnabledForNewRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.enterpriseSlug">EnterpriseSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningEnabledForNewRepositories">SecretScanningEnabledForNewRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionCustomLink">SecretScanningPushProtectionCustomLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionEnabledForNewRepositories">SecretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningValidityChecksEnabled">SecretScanningValidityChecksEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedSecurityEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="AdvancedSecurityEnabledForNewRepositoriesInput" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.advancedSecurityEnabledForNewRepositoriesInput"></a>

```go
func AdvancedSecurityEnabledForNewRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `EnterpriseSlugInput`<sup>Optional</sup> <a name="EnterpriseSlugInput" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.enterpriseSlugInput"></a>

```go
func EnterpriseSlugInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SecretScanningEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="SecretScanningEnabledForNewRepositoriesInput" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningEnabledForNewRepositoriesInput"></a>

```go
func SecretScanningEnabledForNewRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `SecretScanningPushProtectionCustomLinkInput`<sup>Optional</sup> <a name="SecretScanningPushProtectionCustomLinkInput" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionCustomLinkInput"></a>

```go
func SecretScanningPushProtectionCustomLinkInput() *string
```

- *Type:* *string

---

##### `SecretScanningPushProtectionEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositoriesInput" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput"></a>

```go
func SecretScanningPushProtectionEnabledForNewRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `SecretScanningValidityChecksEnabledInput`<sup>Optional</sup> <a name="SecretScanningValidityChecksEnabledInput" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningValidityChecksEnabledInput"></a>

```go
func SecretScanningValidityChecksEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AdvancedSecurityEnabledForNewRepositories`<sup>Required</sup> <a name="AdvancedSecurityEnabledForNewRepositories" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.advancedSecurityEnabledForNewRepositories"></a>

```go
func AdvancedSecurityEnabledForNewRepositories() interface{}
```

- *Type:* interface{}

---

##### `EnterpriseSlug`<sup>Required</sup> <a name="EnterpriseSlug" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.enterpriseSlug"></a>

```go
func EnterpriseSlug() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecretScanningEnabledForNewRepositories`<sup>Required</sup> <a name="SecretScanningEnabledForNewRepositories" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningEnabledForNewRepositories"></a>

```go
func SecretScanningEnabledForNewRepositories() interface{}
```

- *Type:* interface{}

---

##### `SecretScanningPushProtectionCustomLink`<sup>Required</sup> <a name="SecretScanningPushProtectionCustomLink" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionCustomLink"></a>

```go
func SecretScanningPushProtectionCustomLink() *string
```

- *Type:* *string

---

##### `SecretScanningPushProtectionEnabledForNewRepositories`<sup>Required</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositories" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```go
func SecretScanningPushProtectionEnabledForNewRepositories() interface{}
```

- *Type:* interface{}

---

##### `SecretScanningValidityChecksEnabled`<sup>Required</sup> <a name="SecretScanningValidityChecksEnabled" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningValidityChecksEnabled"></a>

```go
func SecretScanningValidityChecksEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseSecurityAnalysisSettingsConfig <a name="EnterpriseSecurityAnalysisSettingsConfig" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-github-go/github/v15/enterprisesecurityanalysissettings"

&enterprisesecurityanalysissettings.EnterpriseSecurityAnalysisSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnterpriseSlug: *string,
	AdvancedSecurityEnabledForNewRepositories: interface{},
	Id: *string,
	SecretScanningEnabledForNewRepositories: interface{},
	SecretScanningPushProtectionCustomLink: *string,
	SecretScanningPushProtectionEnabledForNewRepositories: interface{},
	SecretScanningValidityChecksEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.enterpriseSlug">EnterpriseSlug</a></code> | <code>*string</code> | The slug of the enterprise. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.advancedSecurityEnabledForNewRepositories">AdvancedSecurityEnabledForNewRepositories</a></code> | <code>interface{}</code> | Whether GitHub Advanced Security is automatically enabled for new repositories. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/enterprise_security_analysis_settings#id EnterpriseSecurityAnalysisSettings#id}. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningEnabledForNewRepositories">SecretScanningEnabledForNewRepositories</a></code> | <code>interface{}</code> | Whether secret scanning is automatically enabled for new repositories. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningPushProtectionCustomLink">SecretScanningPushProtectionCustomLink</a></code> | <code>*string</code> | Custom URL for secret scanning push protection bypass instructions. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories">SecretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>interface{}</code> | Whether secret scanning push protection is automatically enabled for new repositories. |
| <code><a href="#@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningValidityChecksEnabled">SecretScanningValidityChecksEnabled</a></code> | <code>interface{}</code> | Whether secret scanning validity checks are enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnterpriseSlug`<sup>Required</sup> <a name="EnterpriseSlug" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.enterpriseSlug"></a>

```go
EnterpriseSlug *string
```

- *Type:* *string

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/enterprise_security_analysis_settings#enterprise_slug EnterpriseSecurityAnalysisSettings#enterprise_slug}

---

##### `AdvancedSecurityEnabledForNewRepositories`<sup>Optional</sup> <a name="AdvancedSecurityEnabledForNewRepositories" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.advancedSecurityEnabledForNewRepositories"></a>

```go
AdvancedSecurityEnabledForNewRepositories interface{}
```

- *Type:* interface{}

Whether GitHub Advanced Security is automatically enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/enterprise_security_analysis_settings#advanced_security_enabled_for_new_repositories EnterpriseSecurityAnalysisSettings#advanced_security_enabled_for_new_repositories}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/enterprise_security_analysis_settings#id EnterpriseSecurityAnalysisSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecretScanningEnabledForNewRepositories`<sup>Optional</sup> <a name="SecretScanningEnabledForNewRepositories" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningEnabledForNewRepositories"></a>

```go
SecretScanningEnabledForNewRepositories interface{}
```

- *Type:* interface{}

Whether secret scanning is automatically enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/enterprise_security_analysis_settings#secret_scanning_enabled_for_new_repositories EnterpriseSecurityAnalysisSettings#secret_scanning_enabled_for_new_repositories}

---

##### `SecretScanningPushProtectionCustomLink`<sup>Optional</sup> <a name="SecretScanningPushProtectionCustomLink" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningPushProtectionCustomLink"></a>

```go
SecretScanningPushProtectionCustomLink *string
```

- *Type:* *string

Custom URL for secret scanning push protection bypass instructions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/enterprise_security_analysis_settings#secret_scanning_push_protection_custom_link EnterpriseSecurityAnalysisSettings#secret_scanning_push_protection_custom_link}

---

##### `SecretScanningPushProtectionEnabledForNewRepositories`<sup>Optional</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositories" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```go
SecretScanningPushProtectionEnabledForNewRepositories interface{}
```

- *Type:* interface{}

Whether secret scanning push protection is automatically enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/enterprise_security_analysis_settings#secret_scanning_push_protection_enabled_for_new_repositories EnterpriseSecurityAnalysisSettings#secret_scanning_push_protection_enabled_for_new_repositories}

---

##### `SecretScanningValidityChecksEnabled`<sup>Optional</sup> <a name="SecretScanningValidityChecksEnabled" id="@cdktn/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningValidityChecksEnabled"></a>

```go
SecretScanningValidityChecksEnabled interface{}
```

- *Type:* interface{}

Whether secret scanning validity checks are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.1/docs/resources/enterprise_security_analysis_settings#secret_scanning_validity_checks_enabled EnterpriseSecurityAnalysisSettings#secret_scanning_validity_checks_enabled}

---



