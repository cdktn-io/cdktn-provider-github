# `organizationSettings` Submodule <a name="`organizationSettings` Submodule" id="@cdktn/provider-github.organizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationSettings <a name="OrganizationSettings" id="@cdktn/provider-github.organizationSettings.OrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings github_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new OrganizationSettings(Construct Scope, string Id, OrganizationSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig">OrganizationSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig">OrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetAdvancedSecurityEnabledForNewRepositories">ResetAdvancedSecurityEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetBlog">ResetBlog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetCompany">ResetCompany</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetDefaultRepositoryPermission">ResetDefaultRepositoryPermission</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetDependabotAlertsEnabledForNewRepositories">ResetDependabotAlertsEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetDependabotSecurityUpdatesEnabledForNewRepositories">ResetDependabotSecurityUpdatesEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetDependencyGraphEnabledForNewRepositories">ResetDependencyGraphEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetHasOrganizationProjects">ResetHasOrganizationProjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetHasRepositoryProjects">ResetHasRepositoryProjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateInternalRepositories">ResetMembersCanCreateInternalRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePages">ResetMembersCanCreatePages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivatePages">ResetMembersCanCreatePrivatePages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivateRepositories">ResetMembersCanCreatePrivateRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicPages">ResetMembersCanCreatePublicPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicRepositories">ResetMembersCanCreatePublicRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateRepositories">ResetMembersCanCreateRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanForkPrivateRepositories">ResetMembersCanForkPrivateRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningEnabledForNewRepositories">ResetSecretScanningEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningPushProtectionEnabledForNewRepositories">ResetSecretScanningPushProtectionEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetTwitterUsername">ResetTwitterUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.resetWebCommitSignoffRequired">ResetWebCommitSignoffRequired</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAdvancedSecurityEnabledForNewRepositories` <a name="ResetAdvancedSecurityEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetAdvancedSecurityEnabledForNewRepositories"></a>

```csharp
private void ResetAdvancedSecurityEnabledForNewRepositories()
```

##### `ResetBlog` <a name="ResetBlog" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetBlog"></a>

```csharp
private void ResetBlog()
```

##### `ResetCompany` <a name="ResetCompany" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetCompany"></a>

```csharp
private void ResetCompany()
```

##### `ResetDefaultRepositoryPermission` <a name="ResetDefaultRepositoryPermission" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetDefaultRepositoryPermission"></a>

```csharp
private void ResetDefaultRepositoryPermission()
```

##### `ResetDependabotAlertsEnabledForNewRepositories` <a name="ResetDependabotAlertsEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetDependabotAlertsEnabledForNewRepositories"></a>

```csharp
private void ResetDependabotAlertsEnabledForNewRepositories()
```

##### `ResetDependabotSecurityUpdatesEnabledForNewRepositories` <a name="ResetDependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetDependabotSecurityUpdatesEnabledForNewRepositories"></a>

```csharp
private void ResetDependabotSecurityUpdatesEnabledForNewRepositories()
```

##### `ResetDependencyGraphEnabledForNewRepositories` <a name="ResetDependencyGraphEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetDependencyGraphEnabledForNewRepositories"></a>

```csharp
private void ResetDependencyGraphEnabledForNewRepositories()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetHasOrganizationProjects` <a name="ResetHasOrganizationProjects" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetHasOrganizationProjects"></a>

```csharp
private void ResetHasOrganizationProjects()
```

##### `ResetHasRepositoryProjects` <a name="ResetHasRepositoryProjects" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetHasRepositoryProjects"></a>

```csharp
private void ResetHasRepositoryProjects()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMembersCanCreateInternalRepositories` <a name="ResetMembersCanCreateInternalRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateInternalRepositories"></a>

```csharp
private void ResetMembersCanCreateInternalRepositories()
```

##### `ResetMembersCanCreatePages` <a name="ResetMembersCanCreatePages" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePages"></a>

```csharp
private void ResetMembersCanCreatePages()
```

##### `ResetMembersCanCreatePrivatePages` <a name="ResetMembersCanCreatePrivatePages" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivatePages"></a>

```csharp
private void ResetMembersCanCreatePrivatePages()
```

##### `ResetMembersCanCreatePrivateRepositories` <a name="ResetMembersCanCreatePrivateRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivateRepositories"></a>

```csharp
private void ResetMembersCanCreatePrivateRepositories()
```

##### `ResetMembersCanCreatePublicPages` <a name="ResetMembersCanCreatePublicPages" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicPages"></a>

```csharp
private void ResetMembersCanCreatePublicPages()
```

##### `ResetMembersCanCreatePublicRepositories` <a name="ResetMembersCanCreatePublicRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicRepositories"></a>

```csharp
private void ResetMembersCanCreatePublicRepositories()
```

##### `ResetMembersCanCreateRepositories` <a name="ResetMembersCanCreateRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateRepositories"></a>

```csharp
private void ResetMembersCanCreateRepositories()
```

##### `ResetMembersCanForkPrivateRepositories` <a name="ResetMembersCanForkPrivateRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetMembersCanForkPrivateRepositories"></a>

```csharp
private void ResetMembersCanForkPrivateRepositories()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSecretScanningEnabledForNewRepositories` <a name="ResetSecretScanningEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningEnabledForNewRepositories"></a>

```csharp
private void ResetSecretScanningEnabledForNewRepositories()
```

##### `ResetSecretScanningPushProtectionEnabledForNewRepositories` <a name="ResetSecretScanningPushProtectionEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningPushProtectionEnabledForNewRepositories"></a>

```csharp
private void ResetSecretScanningPushProtectionEnabledForNewRepositories()
```

##### `ResetTwitterUsername` <a name="ResetTwitterUsername" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetTwitterUsername"></a>

```csharp
private void ResetTwitterUsername()
```

##### `ResetWebCommitSignoffRequired` <a name="ResetWebCommitSignoffRequired" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.resetWebCommitSignoffRequired"></a>

```csharp
private void ResetWebCommitSignoffRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OrganizationSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

OrganizationSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

OrganizationSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Github;

OrganizationSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

OrganizationSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OrganizationSettings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrganizationSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositoriesInput">AdvancedSecurityEnabledForNewRepositoriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.billingEmailInput">BillingEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.blogInput">BlogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.companyInput">CompanyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermissionInput">DefaultRepositoryPermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositoriesInput">DependabotAlertsEnabledForNewRepositoriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositoriesInput">DependabotSecurityUpdatesEnabledForNewRepositoriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositoriesInput">DependencyGraphEnabledForNewRepositoriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjectsInput">HasOrganizationProjectsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjectsInput">HasRepositoryProjectsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositoriesInput">MembersCanCreateInternalRepositoriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePagesInput">MembersCanCreatePagesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePagesInput">MembersCanCreatePrivatePagesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositoriesInput">MembersCanCreatePrivateRepositoriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPagesInput">MembersCanCreatePublicPagesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositoriesInput">MembersCanCreatePublicRepositoriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositoriesInput">MembersCanCreateRepositoriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositoriesInput">MembersCanForkPrivateRepositoriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositoriesInput">SecretScanningEnabledForNewRepositoriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput">SecretScanningPushProtectionEnabledForNewRepositoriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.twitterUsernameInput">TwitterUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequiredInput">WebCommitSignoffRequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositories">AdvancedSecurityEnabledForNewRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.billingEmail">BillingEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.blog">Blog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.company">Company</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermission">DefaultRepositoryPermission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositories">DependabotAlertsEnabledForNewRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositories">DependabotSecurityUpdatesEnabledForNewRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositories">DependencyGraphEnabledForNewRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjects">HasOrganizationProjects</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjects">HasRepositoryProjects</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositories">MembersCanCreateInternalRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePages">MembersCanCreatePages</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePages">MembersCanCreatePrivatePages</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositories">MembersCanCreatePrivateRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPages">MembersCanCreatePublicPages</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositories">MembersCanCreatePublicRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositories">MembersCanCreateRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositories">MembersCanForkPrivateRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositories">SecretScanningEnabledForNewRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositories">SecretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.twitterUsername">TwitterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequired">WebCommitSignoffRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdvancedSecurityEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="AdvancedSecurityEnabledForNewRepositoriesInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositoriesInput"></a>

```csharp
public bool|IResolvable AdvancedSecurityEnabledForNewRepositoriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BillingEmailInput`<sup>Optional</sup> <a name="BillingEmailInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.billingEmailInput"></a>

```csharp
public string BillingEmailInput { get; }
```

- *Type:* string

---

##### `BlogInput`<sup>Optional</sup> <a name="BlogInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.blogInput"></a>

```csharp
public string BlogInput { get; }
```

- *Type:* string

---

##### `CompanyInput`<sup>Optional</sup> <a name="CompanyInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.companyInput"></a>

```csharp
public string CompanyInput { get; }
```

- *Type:* string

---

##### `DefaultRepositoryPermissionInput`<sup>Optional</sup> <a name="DefaultRepositoryPermissionInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermissionInput"></a>

```csharp
public string DefaultRepositoryPermissionInput { get; }
```

- *Type:* string

---

##### `DependabotAlertsEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="DependabotAlertsEnabledForNewRepositoriesInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositoriesInput"></a>

```csharp
public bool|IResolvable DependabotAlertsEnabledForNewRepositoriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DependabotSecurityUpdatesEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="DependabotSecurityUpdatesEnabledForNewRepositoriesInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositoriesInput"></a>

```csharp
public bool|IResolvable DependabotSecurityUpdatesEnabledForNewRepositoriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DependencyGraphEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="DependencyGraphEnabledForNewRepositoriesInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositoriesInput"></a>

```csharp
public bool|IResolvable DependencyGraphEnabledForNewRepositoriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `HasOrganizationProjectsInput`<sup>Optional</sup> <a name="HasOrganizationProjectsInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjectsInput"></a>

```csharp
public bool|IResolvable HasOrganizationProjectsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HasRepositoryProjectsInput`<sup>Optional</sup> <a name="HasRepositoryProjectsInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjectsInput"></a>

```csharp
public bool|IResolvable HasRepositoryProjectsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersCanCreateInternalRepositoriesInput`<sup>Optional</sup> <a name="MembersCanCreateInternalRepositoriesInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositoriesInput"></a>

```csharp
public bool|IResolvable MembersCanCreateInternalRepositoriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MembersCanCreatePagesInput`<sup>Optional</sup> <a name="MembersCanCreatePagesInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePagesInput"></a>

```csharp
public bool|IResolvable MembersCanCreatePagesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MembersCanCreatePrivatePagesInput`<sup>Optional</sup> <a name="MembersCanCreatePrivatePagesInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePagesInput"></a>

```csharp
public bool|IResolvable MembersCanCreatePrivatePagesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MembersCanCreatePrivateRepositoriesInput`<sup>Optional</sup> <a name="MembersCanCreatePrivateRepositoriesInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositoriesInput"></a>

```csharp
public bool|IResolvable MembersCanCreatePrivateRepositoriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MembersCanCreatePublicPagesInput`<sup>Optional</sup> <a name="MembersCanCreatePublicPagesInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPagesInput"></a>

```csharp
public bool|IResolvable MembersCanCreatePublicPagesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MembersCanCreatePublicRepositoriesInput`<sup>Optional</sup> <a name="MembersCanCreatePublicRepositoriesInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositoriesInput"></a>

```csharp
public bool|IResolvable MembersCanCreatePublicRepositoriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MembersCanCreateRepositoriesInput`<sup>Optional</sup> <a name="MembersCanCreateRepositoriesInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositoriesInput"></a>

```csharp
public bool|IResolvable MembersCanCreateRepositoriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MembersCanForkPrivateRepositoriesInput`<sup>Optional</sup> <a name="MembersCanForkPrivateRepositoriesInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositoriesInput"></a>

```csharp
public bool|IResolvable MembersCanForkPrivateRepositoriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecretScanningEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="SecretScanningEnabledForNewRepositoriesInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositoriesInput"></a>

```csharp
public bool|IResolvable SecretScanningEnabledForNewRepositoriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecretScanningPushProtectionEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositoriesInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput"></a>

```csharp
public bool|IResolvable SecretScanningPushProtectionEnabledForNewRepositoriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TwitterUsernameInput`<sup>Optional</sup> <a name="TwitterUsernameInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.twitterUsernameInput"></a>

```csharp
public string TwitterUsernameInput { get; }
```

- *Type:* string

---

##### `WebCommitSignoffRequiredInput`<sup>Optional</sup> <a name="WebCommitSignoffRequiredInput" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequiredInput"></a>

```csharp
public bool|IResolvable WebCommitSignoffRequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AdvancedSecurityEnabledForNewRepositories`<sup>Required</sup> <a name="AdvancedSecurityEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable AdvancedSecurityEnabledForNewRepositories { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BillingEmail`<sup>Required</sup> <a name="BillingEmail" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.billingEmail"></a>

```csharp
public string BillingEmail { get; }
```

- *Type:* string

---

##### `Blog`<sup>Required</sup> <a name="Blog" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.blog"></a>

```csharp
public string Blog { get; }
```

- *Type:* string

---

##### `Company`<sup>Required</sup> <a name="Company" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.company"></a>

```csharp
public string Company { get; }
```

- *Type:* string

---

##### `DefaultRepositoryPermission`<sup>Required</sup> <a name="DefaultRepositoryPermission" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermission"></a>

```csharp
public string DefaultRepositoryPermission { get; }
```

- *Type:* string

---

##### `DependabotAlertsEnabledForNewRepositories`<sup>Required</sup> <a name="DependabotAlertsEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable DependabotAlertsEnabledForNewRepositories { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DependabotSecurityUpdatesEnabledForNewRepositories`<sup>Required</sup> <a name="DependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable DependabotSecurityUpdatesEnabledForNewRepositories { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DependencyGraphEnabledForNewRepositories`<sup>Required</sup> <a name="DependencyGraphEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable DependencyGraphEnabledForNewRepositories { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `HasOrganizationProjects`<sup>Required</sup> <a name="HasOrganizationProjects" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjects"></a>

```csharp
public bool|IResolvable HasOrganizationProjects { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HasRepositoryProjects`<sup>Required</sup> <a name="HasRepositoryProjects" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjects"></a>

```csharp
public bool|IResolvable HasRepositoryProjects { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MembersCanCreateInternalRepositories`<sup>Required</sup> <a name="MembersCanCreateInternalRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositories"></a>

```csharp
public bool|IResolvable MembersCanCreateInternalRepositories { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MembersCanCreatePages`<sup>Required</sup> <a name="MembersCanCreatePages" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePages"></a>

```csharp
public bool|IResolvable MembersCanCreatePages { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MembersCanCreatePrivatePages`<sup>Required</sup> <a name="MembersCanCreatePrivatePages" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePages"></a>

```csharp
public bool|IResolvable MembersCanCreatePrivatePages { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MembersCanCreatePrivateRepositories`<sup>Required</sup> <a name="MembersCanCreatePrivateRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositories"></a>

```csharp
public bool|IResolvable MembersCanCreatePrivateRepositories { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MembersCanCreatePublicPages`<sup>Required</sup> <a name="MembersCanCreatePublicPages" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPages"></a>

```csharp
public bool|IResolvable MembersCanCreatePublicPages { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MembersCanCreatePublicRepositories`<sup>Required</sup> <a name="MembersCanCreatePublicRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositories"></a>

```csharp
public bool|IResolvable MembersCanCreatePublicRepositories { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MembersCanCreateRepositories`<sup>Required</sup> <a name="MembersCanCreateRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositories"></a>

```csharp
public bool|IResolvable MembersCanCreateRepositories { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MembersCanForkPrivateRepositories`<sup>Required</sup> <a name="MembersCanForkPrivateRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositories"></a>

```csharp
public bool|IResolvable MembersCanForkPrivateRepositories { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecretScanningEnabledForNewRepositories`<sup>Required</sup> <a name="SecretScanningEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable SecretScanningEnabledForNewRepositories { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecretScanningPushProtectionEnabledForNewRepositories`<sup>Required</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable SecretScanningPushProtectionEnabledForNewRepositories { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TwitterUsername`<sup>Required</sup> <a name="TwitterUsername" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.twitterUsername"></a>

```csharp
public string TwitterUsername { get; }
```

- *Type:* string

---

##### `WebCommitSignoffRequired`<sup>Required</sup> <a name="WebCommitSignoffRequired" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequired"></a>

```csharp
public bool|IResolvable WebCommitSignoffRequired { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.organizationSettings.OrganizationSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationSettingsConfig <a name="OrganizationSettingsConfig" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new OrganizationSettingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BillingEmail,
    bool|IResolvable AdvancedSecurityEnabledForNewRepositories = null,
    string Blog = null,
    string Company = null,
    string DefaultRepositoryPermission = null,
    bool|IResolvable DependabotAlertsEnabledForNewRepositories = null,
    bool|IResolvable DependabotSecurityUpdatesEnabledForNewRepositories = null,
    bool|IResolvable DependencyGraphEnabledForNewRepositories = null,
    string Description = null,
    string Email = null,
    bool|IResolvable HasOrganizationProjects = null,
    bool|IResolvable HasRepositoryProjects = null,
    string Id = null,
    string Location = null,
    bool|IResolvable MembersCanCreateInternalRepositories = null,
    bool|IResolvable MembersCanCreatePages = null,
    bool|IResolvable MembersCanCreatePrivatePages = null,
    bool|IResolvable MembersCanCreatePrivateRepositories = null,
    bool|IResolvable MembersCanCreatePublicPages = null,
    bool|IResolvable MembersCanCreatePublicRepositories = null,
    bool|IResolvable MembersCanCreateRepositories = null,
    bool|IResolvable MembersCanForkPrivateRepositories = null,
    string Name = null,
    bool|IResolvable SecretScanningEnabledForNewRepositories = null,
    bool|IResolvable SecretScanningPushProtectionEnabledForNewRepositories = null,
    string TwitterUsername = null,
    bool|IResolvable WebCommitSignoffRequired = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.billingEmail">BillingEmail</a></code> | <code>string</code> | The billing email address for the organization. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.advancedSecurityEnabledForNewRepositories">AdvancedSecurityEnabledForNewRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not advanced security is enabled for new repositories. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.blog">Blog</a></code> | <code>string</code> | The blog URL for the organization. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.company">Company</a></code> | <code>string</code> | The company name for the organization. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.defaultRepositoryPermission">DefaultRepositoryPermission</a></code> | <code>string</code> | The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotAlertsEnabledForNewRepositories">DependabotAlertsEnabledForNewRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not dependabot alerts are enabled for new repositories. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotSecurityUpdatesEnabledForNewRepositories">DependabotSecurityUpdatesEnabledForNewRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not dependabot security updates are enabled for new repositories. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependencyGraphEnabledForNewRepositories">DependencyGraphEnabledForNewRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not dependency graph is enabled for new repositories. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.description">Description</a></code> | <code>string</code> | The description for the organization. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.email">Email</a></code> | <code>string</code> | The email address for the organization. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasOrganizationProjects">HasOrganizationProjects</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not organization projects are enabled for the organization. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasRepositoryProjects">HasRepositoryProjects</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not repository projects are enabled for the organization. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#id OrganizationSettings#id}. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.location">Location</a></code> | <code>string</code> | The location for the organization. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateInternalRepositories">MembersCanCreateInternalRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not organization members can create new internal repositories. For Enterprise Organizations only. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePages">MembersCanCreatePages</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not organization members can create new pages. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivatePages">MembersCanCreatePrivatePages</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not organization members can create new private pages. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivateRepositories">MembersCanCreatePrivateRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not organization members can create new private repositories. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicPages">MembersCanCreatePublicPages</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not organization members can create new public pages. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicRepositories">MembersCanCreatePublicRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not organization members can create new public repositories. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateRepositories">MembersCanCreateRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not organization members can create new repositories. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanForkPrivateRepositories">MembersCanForkPrivateRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not organization members can fork private repositories. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.name">Name</a></code> | <code>string</code> | The name for the organization. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningEnabledForNewRepositories">SecretScanningEnabledForNewRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not secret scanning is enabled for new repositories. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories">SecretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not secret scanning push protection is enabled for new repositories. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.twitterUsername">TwitterUsername</a></code> | <code>string</code> | The Twitter username for the organization. |
| <code><a href="#@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.webCommitSignoffRequired">WebCommitSignoffRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not commit signatures are required for commits to the organization. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BillingEmail`<sup>Required</sup> <a name="BillingEmail" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.billingEmail"></a>

```csharp
public string BillingEmail { get; set; }
```

- *Type:* string

The billing email address for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#billing_email OrganizationSettings#billing_email}

---

##### `AdvancedSecurityEnabledForNewRepositories`<sup>Optional</sup> <a name="AdvancedSecurityEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.advancedSecurityEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable AdvancedSecurityEnabledForNewRepositories { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not advanced security is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#advanced_security_enabled_for_new_repositories OrganizationSettings#advanced_security_enabled_for_new_repositories}

---

##### `Blog`<sup>Optional</sup> <a name="Blog" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.blog"></a>

```csharp
public string Blog { get; set; }
```

- *Type:* string

The blog URL for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#blog OrganizationSettings#blog}

---

##### `Company`<sup>Optional</sup> <a name="Company" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.company"></a>

```csharp
public string Company { get; set; }
```

- *Type:* string

The company name for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#company OrganizationSettings#company}

---

##### `DefaultRepositoryPermission`<sup>Optional</sup> <a name="DefaultRepositoryPermission" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.defaultRepositoryPermission"></a>

```csharp
public string DefaultRepositoryPermission { get; set; }
```

- *Type:* string

The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#default_repository_permission OrganizationSettings#default_repository_permission}

---

##### `DependabotAlertsEnabledForNewRepositories`<sup>Optional</sup> <a name="DependabotAlertsEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotAlertsEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable DependabotAlertsEnabledForNewRepositories { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not dependabot alerts are enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#dependabot_alerts_enabled_for_new_repositories OrganizationSettings#dependabot_alerts_enabled_for_new_repositories}

---

##### `DependabotSecurityUpdatesEnabledForNewRepositories`<sup>Optional</sup> <a name="DependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotSecurityUpdatesEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable DependabotSecurityUpdatesEnabledForNewRepositories { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not dependabot security updates are enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#dependabot_security_updates_enabled_for_new_repositories OrganizationSettings#dependabot_security_updates_enabled_for_new_repositories}

---

##### `DependencyGraphEnabledForNewRepositories`<sup>Optional</sup> <a name="DependencyGraphEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependencyGraphEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable DependencyGraphEnabledForNewRepositories { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not dependency graph is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#dependency_graph_enabled_for_new_repositories OrganizationSettings#dependency_graph_enabled_for_new_repositories}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#description OrganizationSettings#description}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The email address for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#email OrganizationSettings#email}

---

##### `HasOrganizationProjects`<sup>Optional</sup> <a name="HasOrganizationProjects" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasOrganizationProjects"></a>

```csharp
public bool|IResolvable HasOrganizationProjects { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not organization projects are enabled for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#has_organization_projects OrganizationSettings#has_organization_projects}

---

##### `HasRepositoryProjects`<sup>Optional</sup> <a name="HasRepositoryProjects" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasRepositoryProjects"></a>

```csharp
public bool|IResolvable HasRepositoryProjects { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not repository projects are enabled for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#has_repository_projects OrganizationSettings#has_repository_projects}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#id OrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#location OrganizationSettings#location}

---

##### `MembersCanCreateInternalRepositories`<sup>Optional</sup> <a name="MembersCanCreateInternalRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateInternalRepositories"></a>

```csharp
public bool|IResolvable MembersCanCreateInternalRepositories { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not organization members can create new internal repositories. For Enterprise Organizations only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#members_can_create_internal_repositories OrganizationSettings#members_can_create_internal_repositories}

---

##### `MembersCanCreatePages`<sup>Optional</sup> <a name="MembersCanCreatePages" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePages"></a>

```csharp
public bool|IResolvable MembersCanCreatePages { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not organization members can create new pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#members_can_create_pages OrganizationSettings#members_can_create_pages}

---

##### `MembersCanCreatePrivatePages`<sup>Optional</sup> <a name="MembersCanCreatePrivatePages" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivatePages"></a>

```csharp
public bool|IResolvable MembersCanCreatePrivatePages { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not organization members can create new private pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#members_can_create_private_pages OrganizationSettings#members_can_create_private_pages}

---

##### `MembersCanCreatePrivateRepositories`<sup>Optional</sup> <a name="MembersCanCreatePrivateRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivateRepositories"></a>

```csharp
public bool|IResolvable MembersCanCreatePrivateRepositories { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not organization members can create new private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#members_can_create_private_repositories OrganizationSettings#members_can_create_private_repositories}

---

##### `MembersCanCreatePublicPages`<sup>Optional</sup> <a name="MembersCanCreatePublicPages" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicPages"></a>

```csharp
public bool|IResolvable MembersCanCreatePublicPages { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not organization members can create new public pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#members_can_create_public_pages OrganizationSettings#members_can_create_public_pages}

---

##### `MembersCanCreatePublicRepositories`<sup>Optional</sup> <a name="MembersCanCreatePublicRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicRepositories"></a>

```csharp
public bool|IResolvable MembersCanCreatePublicRepositories { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not organization members can create new public repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#members_can_create_public_repositories OrganizationSettings#members_can_create_public_repositories}

---

##### `MembersCanCreateRepositories`<sup>Optional</sup> <a name="MembersCanCreateRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateRepositories"></a>

```csharp
public bool|IResolvable MembersCanCreateRepositories { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not organization members can create new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#members_can_create_repositories OrganizationSettings#members_can_create_repositories}

---

##### `MembersCanForkPrivateRepositories`<sup>Optional</sup> <a name="MembersCanForkPrivateRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanForkPrivateRepositories"></a>

```csharp
public bool|IResolvable MembersCanForkPrivateRepositories { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not organization members can fork private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#members_can_fork_private_repositories OrganizationSettings#members_can_fork_private_repositories}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#name OrganizationSettings#name}

---

##### `SecretScanningEnabledForNewRepositories`<sup>Optional</sup> <a name="SecretScanningEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable SecretScanningEnabledForNewRepositories { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not secret scanning is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#secret_scanning_enabled_for_new_repositories OrganizationSettings#secret_scanning_enabled_for_new_repositories}

---

##### `SecretScanningPushProtectionEnabledForNewRepositories`<sup>Optional</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositories" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable SecretScanningPushProtectionEnabledForNewRepositories { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not secret scanning push protection is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#secret_scanning_push_protection_enabled_for_new_repositories OrganizationSettings#secret_scanning_push_protection_enabled_for_new_repositories}

---

##### `TwitterUsername`<sup>Optional</sup> <a name="TwitterUsername" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.twitterUsername"></a>

```csharp
public string TwitterUsername { get; set; }
```

- *Type:* string

The Twitter username for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#twitter_username OrganizationSettings#twitter_username}

---

##### `WebCommitSignoffRequired`<sup>Optional</sup> <a name="WebCommitSignoffRequired" id="@cdktn/provider-github.organizationSettings.OrganizationSettingsConfig.property.webCommitSignoffRequired"></a>

```csharp
public bool|IResolvable WebCommitSignoffRequired { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not commit signatures are required for commits to the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/organization_settings#web_commit_signoff_required OrganizationSettings#web_commit_signoff_required}

---



